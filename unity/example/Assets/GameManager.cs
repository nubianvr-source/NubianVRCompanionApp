using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEngine;
using UnityEngine.UI;
using System.Linq;
using Random = UnityEngine.Random;
using UnityEngine.SceneManagement;

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
    [SerializeField] private Text interventionText;
    [SerializeField] private Text playerPointsText;
    [SerializeField] private Text numberOfQuestionsAnsweredText;
    private static int _numberOfQuestionsAnswered;
    [SerializeField] private int playerPoints;
    [SerializeField] private Animator animator;
    private void Start()
    {
        if (_unansweredQuestions == null || _unansweredQuestions.Count == 0)
        {
            _unansweredQuestions = questions.ToList<Questions>();
        }

       // if (_numberOfQuestionsAnswered == 5)
        //{
            
       // }

        SetCurrentQuestion();
    }

    private void SetCurrentQuestion()
    {
        int randomQuestionIndex = Random.Range(0, _unansweredQuestions.Count);
        _currentQuestion = _unansweredQuestions[randomQuestionIndex];

        questionText.text = _currentQuestion.textQuestion;
        questionImage.sprite = _currentQuestion.imageQuestion;

        if (_currentQuestion.isClickTrue)
        {
            trueAnswerText.text = "CORRECT\n+10 POINTS";
            falseAnswerText.text = "WRONG\n-10 POINTS";
        }
        else
        {
            trueAnswerText.text = "WRONG\n-10 POINTS";
            falseAnswerText.text = "CORRECT\n+10 POINTS";
        }



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

        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    public void UserSelectsTrue()
    {
        animator.SetTrigger("FalseIgnore");
        if (_currentQuestion.isClickTrue)
        {
            //correct
            interventionText.text = _currentQuestion.correctIntervention;
        }
        else
        {
            //false
            interventionText.text = _currentQuestion.wrongIntervention;
            
        }

       

    }
    
    public void UserSelectsFalse()
    {
        animator.SetTrigger("TrueClick");
        if (!_currentQuestion.isClickTrue)
        {
            //correct
            interventionText.text = _currentQuestion.correctIntervention;
        }
        else
        {
            //false
            interventionText.text = _currentQuestion.wrongIntervention;
        }

    }
    
    
}
