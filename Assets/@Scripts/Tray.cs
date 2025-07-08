using DG.Tweening;
using System.Collections.Generic;
using TMPro;
using Unity.VisualScripting;
using UnityEngine;
public class Tray : MonoBehaviour
{
    public TrayData trayData;
    public TextMeshProUGUI AnswerCount;
    public MeshRenderer MeshRenderer;
    public List<Transform> SettingPos;
    public bool isTestMod = false;
    private List<GameObject> Milks = new List<GameObject>();

    private void Start()
    {
        if(isTestMod)
        {
            trayData = new TrayData(3);
            transform.DOMoveY(transform.position.y - 10,5).SetEase(Ease.InOutSine);
        }
        
    }
    private void OnEnable()
    {
        if (!isTestMod)
        {
            trayData = new TrayData();
            Init();
            DownDO();
        }
    }
    /// <summary>
    /// 초기화 메서드.
    /// 기존에 보관 중인 우유들을 반환하고, 새로운 우유를 가져와서 세팅합니다.
    /// </summary>
    public void Init()
    {
        GameObject MilkObj = GameManager.Instance.pool.GetRandomMilk();
        Milk milk = MilkObj.GetComponent<Milk>();
        AnswerCount.text = "3";
        foreach(GameObject Milk in Milks)
        {
            Milk.transform.SetParent(null); // 부모에서 분리
            GameManager.Instance.pool.ReturnMilk(Milk);
        }
        trayData.milks.Clear();
        Milks.Clear();
        trayData.SetIsAnswer(false);
        MeshRenderer.material = milk.GetComponent<MeshRenderer>().material;
        trayData.Setkey(milk.data.milkKey);

    }
    /// <summary>
    /// 우유가 해당 쟁반에 맞는지 검사하고, 맞으면 상태를 업데이트 및 위치를 지정합니다.
    /// </summary>
    /// <param name="MilkObj">검사할 우유 오브젝트</param>
    public void MeilkInspect(GameObject MilkObj)
    {
        Milk milk = MilkObj.GetComponent<Milk>();
        if (trayData.Key == milk.data.milkKey)
        {
           
            if (trayData.milks.Count <= 2)
            {
                trayData.milks.Add(milk.data.milkKey);
                DecreaseAnswerCount();
                SetAnswerMilkPos(MilkObj);
                if(trayData.milks.Count >= 3)
                {
                    trayData.SetIsAnswer(true);
                   
                }
            }

        }
    }
    /// <summary>
    /// 쟁반을 아래로 무한 반복 이동시키는 애니메이션 실행.
    /// </summary>
    private void DownDO()
    {
        // 아래로 무한 반복 이동 (예: y축으로 10 내려가고 다시 시작)
        float distance = 13f;
        float duration = 5f;

        transform.DOMoveY(transform.position.y - distance, duration)
       .SetEase(Ease.Linear)
       .SetLoops(-1, LoopType.Restart)
       .OnStepComplete(() =>
       {
           trayData.isMove = true;
       });
    }
    /// <summary>
    /// 답변 개수를 3에서 현재 우유 수만큼 빼서 텍스트에 업데이트.
    /// </summary>
    public void DecreaseAnswerCount()
    {
        AnswerCount.text = (3 - trayData.milks.Count).ToString();
    }
    /// <summary>
    /// 우유 오브젝트를 설정된 위치 배열 중 해당 인덱스 위치로 부드럽게 이동시키고,
    /// 이동 완료 후 부모를 지정하여 위치를 고정합니다.
    /// </summary>
    /// <param name="MilkObj">이동시킬 우유 오브젝트</param>
    public void SetAnswerMilkPos(GameObject MilkObj)
    {
        int index = trayData.milks.Count - 1;

        if (index < 0 || index >= SettingPos.Count) return;

        Transform target = SettingPos[index];

       
        Vector3 destination = target.position + Vector3.down * 1.3f;


        MilkObj.transform.DOMove(destination, 0.6f)
            .SetEase(Ease.InOutSine)
            .OnComplete(() =>
            {
                MilkObj.transform.SetParent(target, worldPositionStays: false);
                Milks.Add(MilkObj);
                MilkObj.transform.localPosition = Vector3.zero;
            });
    }
}
