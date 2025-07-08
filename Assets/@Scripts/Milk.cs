using DG.Tweening;
using System.Collections;
using UnityEngine;

[System.Serializable]
public class Milk : MonoBehaviour
{
    public MilkData data;
    public SlotManager slotManager;
    private int currentIndex = 0;
    private Coroutine moveCoroutine;
    private bool isMoving = false; // �̵� ������ Ȯ���ϴ� �÷���
    /// <summary>
    /// ������ ���õǾ��� �� ȣ��Ǵ� �޼���.
    /// </summary>
    public void OnSelect()
    {

        slotManager.RemoveMilkAndRearrange(this);

    }
    /// <summary>
    /// ���� �ʱ�ȭ.
    /// </summary>
    /// <param name="manager">���� �Ŵ���</param>
    /// <param name="startIndex">���� ���� �ε���</param>
    public void Init(SlotManager manager, int startIndex)
    {
        slotManager = manager;
        currentIndex = startIndex;
        isMoving = false;

        // ���� ��ġ ���� (��� �̵�)
        if (slotManager.slotPositions != null && startIndex < slotManager.slotPositions.Length)
        {
            transform.position = slotManager.slotPositions[currentIndex].position;
        }

        gameObject.SetActive(true);
        // �ڵ� �̵� ����
        StartAutoMovement();
    }
    /// <summary>
    /// ������ �� ���� ���� �ε巴�� �̵���ŵ�ϴ�.
    /// �� �� �����̸� �̵����� �ʽ��ϴ�.
    /// </summary>
    /// <param name="duration">�̵� �ð�(��)</param>
    public void MoveUpOneSlot(float duration)
    {
        int nextIndex = currentIndex - 1;
        if (nextIndex < 0) return; // �� ���� �� �ö�

        currentIndex = nextIndex;
        isMoving = true;

        transform.DOMove(slotManager.slotPositions[currentIndex].position, duration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() => isMoving = false);
    }
    /// <summary>
    /// �ڵ� �̵� �ڷ�ƾ�� �����մϴ�.
    /// �̹� �̵� ���̸� ���� �ڷ�ƾ�� �����ϰ� �ٽ� �����մϴ�.
    /// </summary>
    public void StartAutoMovement()
    {
        if (moveCoroutine != null)
        {
            StopCoroutine(moveCoroutine);
        }
        moveCoroutine = StartCoroutine(AutoMoveCoroutine());
    }
    /// <summary>
    /// �ڵ� �̵� �ڷ�ƾ�� �����ϰ� DOTween �ִϸ��̼��� �����մϴ�.
    /// </summary>
    public void StopAutoMovement()
    {
        if (moveCoroutine != null)
        {
            StopCoroutine(moveCoroutine);
            moveCoroutine = null;
        }
        // DOTween �ִϸ��̼ǵ� ����
        transform.DOKill();
        isMoving = false;
    }
    /// <summary>
    /// �ڵ����� ������ �Ʒ��� �̵���Ű�� �ڷ�ƾ�Դϴ�.
    /// �̵� ���̸� ����ϸ�, ������ ���Կ� �����ϸ� ����Ʈ���� ���� �� ���ο� ������ �߰��մϴ�.
    /// </summary>
    /// <returns>IEnumerator</returns>
    private IEnumerator AutoMoveCoroutine()
    {
        while (true)
        {
            if (isMoving)
            {
                yield return null;
                continue;
            }

            if (slotManager == null || slotManager.slotPositions == null)
                yield break;

            if (currentIndex + 1 >= slotManager.slotPositions.Length)
            {
                slotManager.RemoveMilkOnly(this);
                slotManager.AddRandomMilk();
                GameManager.Instance.pool.ReturnMilk(gameObject);
                yield break;
            }

            int nextIndex = currentIndex + 1;
            currentIndex = nextIndex;

            isMoving = true;

        }
    }
    /// <summary>
    /// ������ Ư�� ���� �ε����� �ε巴�� �̵���ŵ�ϴ�.
    /// </summary>
    /// <param name="slotIndex">��ǥ ���� �ε���</param>
    public void MoveToSlot(int slotIndex)
    {
        if (slotManager == null || slotManager.slotPositions == null ||
            slotIndex < 0 || slotIndex >= slotManager.slotPositions.Length)
        {
            return;
        }
        currentIndex = slotIndex;

        Vector3 targetPos = slotManager.slotPositions[slotIndex].position;
        float distance = Vector3.Distance(transform.position, targetPos);

        float moveTime = Mathf.Clamp(distance / 50f, 0.5f, 1.6f);

        MoveToSlotInternal(slotIndex, moveTime, Ease.InOutCubic);

    }

    /// <summary>
    /// ���� �̵� �޼���.
    /// ���� DOTween �ִϸ��̼����� ��ġ�� �̵��մϴ�.
    /// </summary>
    /// <param name="targetIndex">��ǥ ���� �ε���</param>
    /// <param name="duration">�̵� �ð�(��)</param>
    /// <param name="easeType">Ease Ÿ��</param>
    private void MoveToSlotInternal(int targetIndex, float duration, Ease easeType)
    {
        if (slotManager == null || slotManager.slotPositions == null ||
            targetIndex < 0 || targetIndex >= slotManager.slotPositions.Length)
        {
            return;
        }
        transform.DOKill();

        isMoving = true;

        Vector3 targetPosition = slotManager.slotPositions[targetIndex].position;

        transform.DOMove(targetPosition, duration)
            .SetEase(easeType)
            .OnComplete(() =>
            {
                isMoving = false;
                currentIndex = targetIndex;
            });
    }

}