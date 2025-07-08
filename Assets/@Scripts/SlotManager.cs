using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SlotManager : MonoBehaviour
{
    public Transform[] slotPositions;
    [SerializeField] private List<Milk> milkList = new List<Milk>();
    public void AddMilks(Milk newMilk, bool isFillBoard = false)
    {
        if (milkList.Count >= slotPositions.Length) return;

        if (isFillBoard)
        {
            // 보드 채우기 
            milkList.Add(newMilk);
            newMilk.transform.SetParent(transform);
            newMilk.Init(this, milkList.Count - 1);
        }
        else
        {
            // 맨 앞에 추가
            milkList.Insert(0, newMilk);
            newMilk.transform.SetParent(transform);
            newMilk.Init(this, 0);

            // 기존 우유들의 인덱스 업데이트
            UpdateMilkIndices();
        }
    }
    public List<Milk> GetMilks()
    {
        return milkList;
    }
    public void AddRandomMilk()
    {
        Milk milk = GameManager.Instance.pool.GetRandomMilk().GetComponent<Milk>();
        AddMilks(milk, false);
    }

    public void RemoveMilkOnly(Milk milk)
    {
        milkList.Remove(milk);
    }

    public void RemoveMilkAndRearrange(Milk target)
    {
        Tray tray = GameManager.Instance.pool.GetLowestTrayByKey(target.data.milkKey);
        if (tray == null)
        {
            return;
        }
        else
        {
            target.StopAutoMovement();
            tray.MeilkInspect(target.gameObject);
        }
        int targetIndex = milkList.IndexOf(target);
        if (targetIndex < 0) return;

        milkList.RemoveAt(targetIndex);

        for (int i = 0; i < targetIndex; i++)
        {        
            milkList[i].MoveToSlot(i);
        }

        // 잠깐 후에 새로운 우유 추가
        StartCoroutine(AddNewMilkAfterDelay(0.1f));
    }

    private IEnumerator AddNewMilkAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        AddRandomMilk();
    }

    private void UpdateMilkIndices()
    {
        // 새로운 우유가 앞에 추가될 때, 기존 우유들의 인덱스 업데이트
        for (int i = 1; i < milkList.Count; i++)
        {
            milkList[i].MoveToSlot(i);
        }
    }
}
