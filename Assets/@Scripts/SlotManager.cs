using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class SlotManager : MonoBehaviour
{
    public Transform[] slotPositions;
    [SerializeField]private List<Milk> milkList = new List<Milk>();
    public void AddMilks(Milk newMilk, bool isFillBoard = false)
    {
        if (milkList.Count >= slotPositions.Length) return;

        if (isFillBoard)
        {
            // ���� ä��� ���: �ڿ������� �߰�
            milkList.Add(newMilk);
            newMilk.transform.SetParent(transform);
            newMilk.Init(this, milkList.Count - 1);
        }
        else
        {
            // �Ϲ� ���: �� �տ� �߰�
            milkList.Insert(0, newMilk);
            newMilk.transform.SetParent(transform);
            newMilk.Init(this, 0);

            // ���� �������� �ε��� ������Ʈ
            UpdateMilkIndices();
        }
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
        int targetIndex = milkList.IndexOf(target);
        if (targetIndex < 0) return;

        milkList.RemoveAt(targetIndex);

        // ���ŵ� �������� �Ʒ��� �ִ� �������� ���� �� ĭ�� �̵�
        for (int i = 0; i < targetIndex; i++)
        {
            // i��° ������ i��° �������� �̵�
            milkList[i].MoveToSlot(i);
        }

        // ��� �Ŀ� ���ο� ���� �߰� (�ִϸ��̼��� ���� ��)
        StartCoroutine(AddNewMilkAfterDelay(0.1f));
    }

    private IEnumerator AddNewMilkAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        AddRandomMilk();
    }

    private void UpdateMilkIndices()
    {
        // ���ο� ������ �տ� �߰��� ��, ���� �������� �ε��� ������Ʈ
        for (int i = 1; i < milkList.Count; i++)
        {
            milkList[i].MoveToSlot(i);
        }
    }
}
