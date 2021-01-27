using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEngine;
using UnityEngine.UI;
using System.Linq;
using Random = UnityEngine.Random;
using UnityEngine.SceneManagement;
using NubianVR.UI;
using TMPro;

public class GameManager : MonoBehaviour
{
    public Questions[] questions;
    private static List<Questions> _unansweredQuestions;
    private Questions _currentQuestion;

    [SerializeField] private Text questionText;
    [SerializeField] private Image questionImage;
    [SerializeField] private float delay = 0.5f;
    [SerializeField] private Text trueAnswerText;
    [SerializeField] private Text falseAnswerText;
    [SerializeField] private TMP_Text interventionText;
    [SerializeField] private Text playerPointsText;
    [SerializeField] private Text numberOfQuestionsAnsweredText;
    [SerializeField] private TMP_Text finalPointsText;
    [SerializeField] private TMP_Text interventionTitle;
    private static int _numberOfQuestionsAnswered = 1;
    [SerializeField] private static int playerPoints;
    [SerializeField] private Animator animator;
    [SerializeField]private UI_System UIManager;
    [SerializeField] private UI_Screen interventionScreen;
    [SerializeField] private UI_Screen finishScreen;
    [SerializeField] private TMP_Text questionPoints;
    [SerializeField] private Button trueButton;
    [SerializeField] private Button falseButton;
    [SerializeField] private Image imagePrompt;
    [SerializeField] private Sprite correctPrompt;
    [SerializeField] private Sprite incorrectPrompt;
    



    private void Start()
    {
        if (_unansweredQuestions == null || _unansweredQuestions.Count == 0)
        {
            _unansweredQuestions = questions.ToList<Questions>();
        }
        SetCurrentQuestion();

        numberOfQuestionsAnsweredText.text = _numberOfQuestionsAnswered + " of 5";

        EnableButtons();
        Screen.orientation = ScreenOrientation.Portrait;
        playerPointsText.gameObject.SetActive(true);



    }

    private void SetCurrentQuestion()
    {
        int randomQuestionIndex = Random.Range(0, _unansweredQuestions.Count);
        _currentQuestion = _unansweredQuestions[randomQuestionIndex];

        questionText.text = _currentQuestion.textQuestion;
        questionImage.sprite = _currentQuestion.imageQuestion;
        trueAnswerText.text = _currentQuestion.TrueAnswerText;
        falseAnswerText.text = _currentQuestion.falseAnswerText;

    }

    private void Update()
    {
        playerPointsText.text = playerPoints + " Points";
    }

    public void LoadNextQuestion()
    {
         StartCoroutine(TransitionToNextQuestion());
    }

    IEnumerator TransitionToNextQuestion()
    {
        _numberOfQuestionsAnswered++;
        _unansweredQuestions.Remove(_currentQuestion);
        
        yield return new WaitForSeconds(delay);

        //SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        UIManager.SwitchScreens(interventionScreen);
    }

    public void UserSelectsTrue()
    {
        //DisableButtons();
        //Look at the Target Raycast for Fader, thats what temporarily disables the button
        UnityMessageManager.Instance.SendMessageToRN("True Button Tapped");
        if (_currentQuestion.isClickTrue)
        {
            //correct
            interventionText.text = _currentQuestion.correctIntervention;
            animator.SetTrigger("TrueCorrect");
            questionPoints.text = "CORRECT\n+10 POINTS";
            interventionTitle.text = "You Did the Right Thing!";
            imagePrompt.sprite = correctPrompt;
            playerPointsText.gameObject.SetActive(false);
            playerPoints += 10;
        }
        else
        {
            //false
            interventionText.text = _currentQuestion.wrongIntervention;
            animator.SetTrigger("TrueWrong");
            questionPoints.text = "WRONG\n-10 POINTS";
            interventionTitle.text = "Risk Alert";
            imagePrompt.sprite = incorrectPrompt;
            playerPointsText.gameObject.SetActive(false);
            playerPoints -= 10;

        }
        



    }
    private void EnableButtons() {
        trueButton.interactable = true;
        falseButton.interactable = true;
    }

    private void DisableButtons()
    {
        trueButton.interactable = false;
        falseButton.interactable = false;
    }

    public void PresentQuestion(float time)
    {
        if (_numberOfQuestionsAnswered > 5)
        {
            if (playerPoints < 0)
            {
                finalPointsText.text = "Your final score is\n -" + playerPoints + " Points.\nIt's seems we might have to take this lesson all over again";
            }

            else if (playerPoints > 0 && playerPoints <= 20)
            {
                finalPointsText.text = "Your final score is\n" + playerPoints + " Points.\n Well at least you didn't get a zero, but a lot more can be done to improve. Maybe try taking this lesson again?";
            }
            else if (playerPoints > 20 && playerPoints <= 40)
            {
                finalPointsText.text = "Your final score is\n" + playerPoints + " Points.\nNicely done, just a few rough edges here and there, nothing a little revision can't fix";
            }
            else
            {
                finalPointsText.text = "Your final score is\n" + playerPoints + " Points.\nA perfect score, well done";
            }

                UIManager.SwitchScreens(finishScreen);

        }
        else
        {
            StartCoroutine(ReloadSceneForNextQuestion(time));
            
        }
       

    }

    IEnumerator ReloadSceneForNextQuestion(float time)
    {
        yield return new WaitForSeconds(time);
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
    
    public void UserSelectsFalse()
    {
        //animator.SetTrigger("TrueWrong");
        //DisableButtons();
        //Look at the Target Raycast for Fader, thats what temporarily disables the button
        UnityMessageManager.Instance.SendMessageToRN("False Button Tapped");
         if (!_currentQuestion.isClickTrue)
          {
            //correct
            interventionText.text = _currentQuestion.correctIntervention;
            animator.SetTrigger("FalseCorrect");
            questionPoints.text = "CORRECT\n+10 POINTS";
            interventionTitle.text = "You Did the Right Thing!";
            imagePrompt.sprite = correctPrompt;
            playerPointsText.gameObject.SetActive(false);
            playerPoints += 10;

        }
          else
          {
            //false
            interventionText.text = _currentQuestion.wrongIntervention;
            animator.SetTrigger("FalseWrong");
            questionPoints.text = "WRONG\n-10 POINTS";
            interventionTitle.text = "Risk Alert";
            imagePrompt.sprite = correctPrompt;
            playerPointsText.gameObject.SetActive(false);
            playerPoints -= 10;
        }
       
    }

    public void Finish()
    {
        UnityMessageManager.Instance.SendMessageToRN("Finish");
        playerPoints = 0;
        SceneManager.LoadScene("ExitScene");
    }

   

    void Awake()
    {
        UnityMessageManager.Instance.OnMessage += RecieveMessage;
    }

    void onDestroy()
    {
        UnityMessageManager.Instance.OnMessage -= RecieveMessage;
    }

    void RecieveMessage(string message)
    {
        
    }


}
