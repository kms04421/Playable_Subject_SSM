using System.Collections;
using System.Collections.Generic;
using UnityEngine;
/// <summary>
/// 우유 슬롯을 관리하는 매니저 클래스입니다.
/// 슬롯 위치 배열을 기반으로 우유(Milk) 오브젝트들을 추가, 제거 및 재배치합니다.
/// </summary>
public class SlotManager : MonoBehaviour
{
    public Transform[] slotPositions;
    [SerializeField] private List<Milk> milkList = new List<Milk>();

    /// <summary>
    /// 새로운 우유를 슬롯에 추가합니다.
    /// isFillBoard가 true면 끝에 추가하여 보드를 채우고,
    /// false면 맨 앞에 추가 후 기존 우유들을 뒤로 밀어냅니다.
    /// </summary>
    /// <param name="newMilk">추가할 우유 객체</param>
    /// <param name="isFillBoard">보드 채우기 모드 여부</param>
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

    /// <summary>
    /// 현재 관리 중인 우유 리스트를 반환합니다.
    /// </summary>
    /// <returns>우유 리스트</returns>
    public List<Milk> GetMilks()
    {
        return milkList;
    }

    /// <summary>
    /// 게임 매니저 풀에서 랜덤 우유를 받아와 슬롯에 추가합니다.
    /// </summary>
    public void AddRandomMilk()
    {
        Milk milk = GameManager.Instance.pool.GetRandomMilk().GetComponent<Milk>();
        AddMilks(milk, false);
    }

    /// <summary>
    /// 슬롯에서 특정 우유만 제거합니다. (재배치나 추가는 하지 않음)
    /// </summary>
    /// <param name="milk">제거할 우유</param>
    public void RemoveMilkOnly(Milk milk)
    {
        milkList.Remove(milk);
    }

    /// <summary>
    /// 슬롯에서 특정 우유를 제거하고, 
    /// 제거된 우유 앞에 있는 우유들은 앞으로 이동시켜 재배치한 후
    /// 잠시 후 새로운 우유를 추가합니다.
    /// </summary>
    /// <param name="target">제거할 우유</param>
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

    /// <summary>
    /// 일정 시간(delay) 후 새로운 우유를 추가하는 코루틴입니다.
    /// </summary>
    /// <param name="delay">지연 시간(초)</param>
    /// <returns>IEnumerator</returns>
    private IEnumerator AddNewMilkAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        AddRandomMilk();
    }

    /// <summary>
    /// 우유가 맨 앞에 추가될 때, 
    /// 기존 우유들의 슬롯 인덱스를 갱신하고 이동시키는 함수입니다.
    /// </summary>
    private void UpdateMilkIndices()
    {
        // 새로운 우유가 앞에 추가될 때, 기존 우유들의 인덱스 업데이트
        for (int i = 1; i < milkList.Count; i++)
        {
            milkList[i].MoveToSlot(i);
        }
    }
}
