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
    /// ���� ������Ʈ���� �̸� �����Ͽ� Ǯ�� �߰��մϴ�.
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
    /// Ǯ���� ������ ���� ������Ʈ �ϳ��� �����ϴ�.
    /// ���� ������Ʈ�� ����Ʈ���� ���ŵǰ�, �������� �⺻������ �ʱ�ȭ�˴ϴ�.
    /// </summary>
    /// <returns>���� ���� ������Ʈ</returns>
    public GameObject GetRandomMilk()
    {
        int index = Random.Range(0, milksList.Count); 
        GameObject milk = milksList[index];

        milksList.RemoveAt(index);

        milk.transform.localScale = Vector3.one; 

        return milk;
    }

    /// <summary>
    /// ������ �ε����� ���� ������Ʈ�� Ǯ���� �����ϴ�.
    /// ���� ������Ʈ�� ����Ʈ���� ���ŵǰ�, �������� �⺻������ �ʱ�ȭ�˴ϴ�.
    /// </summary>
    /// <param name="index">���� ������Ʈ �ε���</param>
    /// <returns>���� ������Ʈ</returns>
    public GameObject GetMilk(int index)
    {
        GameObject milk = milksList[index];

        milksList.RemoveAt(index);

        milk.transform.localScale = Vector3.one;

        return milk;
    }

    /// <summary>
    /// ���� ������Ʈ�� Ǯ�� ��ȯ�մϴ�.
    /// ��Ȱ��ȭ�ϰ� �θ� ������Ʈ Ǯ�� ���� �� ����Ʈ�� �ٽ� �߰��մϴ�.
    /// </summary>
    /// <param name="milk">��ȯ�� ���� ������Ʈ</param>
    public void ReturnMilk(GameObject milk)
    {
        milk.SetActive(false);
        milk.transform.SetParent(transform);
        milksList.Add(milk);
    }

    /// <summary>
    /// ��� ������Ʈ���� ������� ���� �ð� �������� Ȱ��ȭ�ϴ� �ڷ�ƾ�Դϴ�.
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
    /// ������ Ű�� ��ġ�ϸ� Ȱ��ȭ �����̰�, ���� ������ �ƴϸ� �̵� ���� ��� ��
    /// y��ǥ�� ���� ���� ����� ��ȯ�մϴ�.
    /// </summary>
    /// <param name="key">�˻��� Ű ��</param>
    /// <returns>���ǿ� �´� ���� ���� ���, ������ null</returns>
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
