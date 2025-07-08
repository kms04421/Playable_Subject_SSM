using DG.Tweening.Core.Easing;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class GameManager: Singleton<GameManager>
{
    public SlotBoardManager board;
    public ObjectPool pool;
    public Transform tutorialObj;
    public int score = 0;
    public bool isTutorial = true;
    private void Awake()
    {
        pool.SetObjectPool();
        FillBoard(); // 시작 채우기
        TimeStop();
    }
    public void TimeStop()
    {
        Time.timeScale = 0f;
    }
    public void TimeStart()
    {
        Time.timeScale = 1f;

    }
    void FillBoard()
    {
        bool isTutorial = true;
        foreach (var slot in board.slotColumns)
        {
            for (int i = 0; i < 6; i++)
            {
                GameObject milks;

                if (isTutorial && i == 1)
                {
                    milks = pool.GetMilk(40);
                    isTutorial = false;
                }
                else
                {
                    milks = pool.GetRandomMilk();
                }
                    milks.SetActive(true);
                slot.AddMilks(milks.GetComponent<Milk>(),true);  
            }
        }
    }
    public void AddScore(int i)
    {
        score = score + i;
    }
    public void TutorialRay()
    {
        // tutorialObj 기준으로 앞쪽 방향으로 Ray 쏘기
        Ray ray = new Ray(tutorialObj.position, tutorialObj.forward);
        RaycastHit hit;
     
        if (Physics.Raycast(ray, out hit, 10f))
        {
            if (hit.collider.CompareTag("Milk"))
            {
                if (isTutorial)
                {
                    hit.collider.GetComponent<Milk>().OnSelect();
                    isTutorial = false;
                    TimeStart();
                    ViewManager.Instance.Tutorial.gameObject.SetActive(false);
                }
                        
            }
        
        }
    }
}
