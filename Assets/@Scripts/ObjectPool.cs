using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectPool : MonoBehaviour
{
    public List<MilkData> MilksDataList;
    public List<GameObject> TrayDataList;
    private List<GameObject> milksList;

    private void Start()
    {
        StartCoroutine(StartTray());
    }
    /// <summary>
    /// 우유 오브젝트들을 미리 생성하여 풀에 추가합니다.
    /// </summary>
    public void SetObjectPool()
    {
        milksList = new List<GameObject>();
        foreach (var milk in MilksDataList)
            for (int i = 0; i < 20; i++)
            {
                GameObject instance = Instantiate(milk.prefab);
                instance.transform.SetParent(transform, false);
                instance.SetActive(false);
                milksList.Add(instance);
            }

    }
    /// <summary>
    /// 풀에서 랜덤한 우유 오브젝트 하나를 꺼냅니다.
    /// 꺼낸 오브젝트는 리스트에서 제거되고, 스케일은 기본값으로 초기화됩니다.
    /// </summary>
    /// <returns>랜덤 우유 오브젝트</returns>
    public GameObject GetRandomMilk()
    {
        int index = Random.Range(0, milksList.Count); 
        GameObject milk = milksList[index];

        milksList.RemoveAt(index);

        milk.transform.localScale = Vector3.one; 

        return milk;
    }

    /// <summary>
    /// 지정된 인덱스의 우유 오브젝트를 풀에서 꺼냅니다.
    /// 꺼낸 오브젝트는 리스트에서 제거되고, 스케일은 기본값으로 초기화됩니다.
    /// </summary>
    /// <param name="index">우유 오브젝트 인덱스</param>
    /// <returns>우유 오브젝트</returns>
    public GameObject GetMilk(int index)
    {
        GameObject milk = milksList[index];

        milksList.RemoveAt(index);

        milk.transform.localScale = Vector3.one;

        return milk;
    }

    /// <summary>
    /// 우유 오브젝트를 풀에 반환합니다.
    /// 비활성화하고 부모를 오브젝트 풀로 지정 후 리스트에 다시 추가합니다.
    /// </summary>
    /// <param name="milk">반환할 우유 오브젝트</param>
    public void ReturnMilk(GameObject milk)
    {
        milk.SetActive(false);
        milk.transform.SetParent(transform);
        milksList.Add(milk);
    }

    /// <summary>
    /// 쟁반 오브젝트들을 순서대로 일정 시간 간격으로 활성화하는 코루틴입니다.
    /// </summary>
    /// <returns>IEnumerator</returns>
    public IEnumerator StartTray()
    {
        int i = TrayDataList.Count;
        while (i  >  0)
        {
            i--;
            TrayDataList[i].SetActive(true);
            yield return new WaitForSeconds(1.7f);
        }
    }

    /// <summary>
    /// 지정한 키와 일치하며 활성화 상태이고, 아직 정답이 아니며 이동 중인 쟁반 중
    /// y좌표가 가장 낮은 쟁반을 반환합니다.
    /// </summary>
    /// <param name="key">검색할 키 값</param>
    /// <returns>조건에 맞는 가장 낮은 쟁반, 없으면 null</returns>
    public Tray GetLowestTrayByKey(int key)
    {
        Tray result = null;
        float lowestY = float.MaxValue;

        foreach (var trays in TrayDataList)
        {
            if (trays.activeSelf)
            {
                Tray tray = trays.GetComponent<Tray>();
                if (tray.trayData.Key == key && !tray.trayData.isAnswer && tray.trayData.isMove)
                {
                    float y = tray.transform.position.y;
                    if (y < lowestY)
                    {
                        lowestY = y;
                        result = tray;
                    }
                }
            }
           
        }

        return result;
    }
}
