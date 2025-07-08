using System.Collections;
using System.Collections.Generic;
using Unity.Burst.CompilerServices;
using UnityEngine;

public class AnswerChack : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Tray"))
        {
            Tray tray = other.GetComponent<Tray>();
            TrayData trayData = tray.trayData;
            trayData.isMove = false;
            if(!trayData.isAnswer)
            {
                /*    ViewManager.Instance.Failure.gameObject.SetActive(true);
                    Time.timeScale = 0f;*/
                tray.Init();
            }
            else
            {
                
                tray.Init();
            }
        }
    }
}
