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
    public void DecreaseAnswerCount()
    {
        AnswerCount.text = (3 - trayData.milks.Count).ToString();
    }
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
