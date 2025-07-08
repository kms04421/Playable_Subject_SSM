using System.Collections;
using System.Collections.Generic;
using UnityEngine;
/// <summary>
/// ���� ������ �����ϴ� �Ŵ��� Ŭ�����Դϴ�.
/// ���� ��ġ �迭�� ������� ����(Milk) ������Ʈ���� �߰�, ���� �� ���ġ�մϴ�.
/// </summary>
public class SlotManager : MonoBehaviour
{
    public Transform[] slotPositions;
    [SerializeField] private List<Milk> milkList = new List<Milk>();

    /// <summary>
    /// ���ο� ������ ���Կ� �߰��մϴ�.
    /// isFillBoard�� true�� ���� �߰��Ͽ� ���带 ä���,
    /// false�� �� �տ� �߰� �� ���� �������� �ڷ� �о���ϴ�.
    /// </summary>
    /// <param name="newMilk">�߰��� ���� ��ü</param>
    /// <param name="isFillBoard">���� ä��� ��� ����</param>
    public void AddMilks(Milk newMilk, bool isFillBoard = false)
    {
        if (milkList.Count >= slotPositions.Length) return;

        if (isFillBoard)
        {
            // ���� ä��� 
            milkList.Add(newMilk);
            newMilk.transform.SetParent(transform);
            newMilk.Init(this, milkList.Count - 1);
        }
        else
        {
            // �� �տ� �߰�
            milkList.Insert(0, newMilk);
            newMilk.transform.SetParent(transform);
            newMilk.Init(this, 0);

            // ���� �������� �ε��� ������Ʈ
            UpdateMilkIndices();
        }
    }

    /// <summary>
    /// ���� ���� ���� ���� ����Ʈ�� ��ȯ�մϴ�.
    /// </summary>
    /// <returns>���� ����Ʈ</returns>
    public List<Milk> GetMilks()
    {
        return milkList;
    }

    /// <summary>
    /// ���� �Ŵ��� Ǯ���� ���� ������ �޾ƿ� ���Կ� �߰��մϴ�.
    /// </summary>
    public void AddRandomMilk()
    {
        Milk milk = GameManager.Instance.pool.GetRandomMilk().GetComponent<Milk>();
        AddMilks(milk, false);
    }

    /// <summary>
    /// ���Կ��� Ư�� ������ �����մϴ�. (���ġ�� �߰��� ���� ����)
    /// </summary>
    /// <param name="milk">������ ����</param>
    public void RemoveMilkOnly(Milk milk)
    {
        milkList.Remove(milk);
    }

    /// <summary>
    /// ���Կ��� Ư�� ������ �����ϰ�, 
    /// ���ŵ� ���� �տ� �ִ� �������� ������ �̵����� ���ġ�� ��
    /// ��� �� ���ο� ������ �߰��մϴ�.
    /// </summary>
    /// <param name="target">������ ����</param>
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

        // ��� �Ŀ� ���ο� ���� �߰�
        StartCoroutine(AddNewMilkAfterDelay(0.1f));
    }

    /// <summary>
    /// ���� �ð�(delay) �� ���ο� ������ �߰��ϴ� �ڷ�ƾ�Դϴ�.
    /// </summary>
    /// <param name="delay">���� �ð�(��)</param>
    /// <returns>IEnumerator</returns>
    private IEnumerator AddNewMilkAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        AddRandomMilk();
    }

    /// <summary>
    /// ������ �� �տ� �߰��� ��, 
    /// ���� �������� ���� �ε����� �����ϰ� �̵���Ű�� �Լ��Դϴ�.
    /// </summary>
    private void UpdateMilkIndices()
    {
        // ���ο� ������ �տ� �߰��� ��, ���� �������� �ε��� ������Ʈ
        for (int i = 1; i < milkList.Count; i++)
        {
            milkList[i].MoveToSlot(i);
        }
    }
}
