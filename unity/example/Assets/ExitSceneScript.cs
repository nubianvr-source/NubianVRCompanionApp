using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ExitSceneScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Finish();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void Finish()
    {
        UnityMessageManager.Instance.SendMessageToRN("Finish");
        Debug.Log("Finish");
        SceneManager.LoadScene("StartScene");
        
    }
}
