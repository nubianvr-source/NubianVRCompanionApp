﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class StartSceneManagerScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Screen.orientation = ScreenOrientation.Portrait;
    }

    // Update is called once per frame
    void Update()
    {
        
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
        switch (message)
        {
            case "TrueFalseModel":
                SceneManager.LoadScene(message);
                break;
            case "TheHunter":
                SceneManager.LoadScene(message);
                break;

        }
    }

    public void GetSceneLoad()
    {
        UnityMessageManager.Instance.SendMessageToRN("SceneToLoad");
    }
}