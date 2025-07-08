using DG.Tweening.Core.Easing;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class GameManager: Singleton<GameManager>
{
    public SlotBoardManager board;
    public ObjectPool pool;

    private void Awake()
    {
        pool.SetObjectPool();
        FillBoard(); // 시작 채우기
    }
    void FillBoard()
    {
        foreach (var slot in board.slotColumns)
        {
            for (int i = 0; i < 6; i++)
            {
                GameObject milks = pool.GetRandomMilk();
                milks.SetActive(true);
                slot.AddMilks(milks.GetComponent<Milk>(),true);  
            }
        }
    }

   
}
