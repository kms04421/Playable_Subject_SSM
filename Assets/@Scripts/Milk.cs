using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class Milk : MonoBehaviour
{
    public MilkData data;
    public SlotManager slotManager;
    private int currentIndex = 0;
    private Coroutine moveCoroutine;
    private bool isMoving = false; // �̵� ������ Ȯ���ϴ� �÷���

    public void OnSelect()
    {
        // �ڵ� �̵� ����
        StopAutoMovement();
        // ���� �Ŵ������� ���� �� ���ġ
        slotManager.RemoveMilkAndRearrange(this);
        // ������Ʈ Ǯ�� ��ȯ
        GameManager.Instance.pool.ReturnMilk(gameObject);
    }

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

    public void StartAutoMovement()
    {
        if (moveCoroutine != null)
        {
            StopCoroutine(moveCoroutine);
        }
        moveCoroutine = StartCoroutine(AutoMoveCoroutine());
    }

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

    private IEnumerator AutoMoveCoroutine()
    {
        while (true)
        {
            // �̵� ���̸� ���
            if (isMoving)
            {
                yield return new WaitForSeconds(0.1f);
                continue;
            }

            yield return new WaitForSeconds(0.9f); // 1�� ���

            // ���� �Ŵ����� ��ġ �迭�� ��ȿ���� Ȯ��
            if (slotManager == null || slotManager.slotPositions == null)
            {
                yield break;
            }

            if (currentIndex + 1 >= slotManager.slotPositions.Length)
            {
                // ������ ���Կ� �����ϸ� ����
                slotManager.RemoveMilkOnly(this);
                slotManager.AddRandomMilk();
                GameManager.Instance.pool.ReturnMilk(gameObject);
                yield break;
            }

            // ���� �������� �̵�
            currentIndex++;

            // �ε巯�� �̵��� ���� ���� �ӵ� ����
            MoveToSlotInternal(currentIndex, 1f, Ease.Linear);
        }
    }

    // ������ Ư�� �������� �̵� (���ġ��)
    public void MoveToSlot(int slotIndex)
    {
        if (slotManager == null || slotManager.slotPositions == null ||
            slotIndex < 0 || slotIndex >= slotManager.slotPositions.Length)
        {
            return;
        }

        // �ڵ� �̵� ���� (���ġ �߿��� �ڵ� �̵� ����)
        StopAutoMovement();

        currentIndex = slotIndex;

        // ���� ��ġ���� ��ǥ ��ġ������ �Ÿ��� ���� �̵� �ð� ���
        float distance = Vector3.Distance(transform.position, slotManager.slotPositions[slotIndex].position);
        float moveTime = Mathf.Clamp(distance / 10f, 0.1f, 0.5f); // �Ÿ� ��� �ð� ���

        MoveToSlotInternal(slotIndex, moveTime, Ease.OutCubic);

        // �̵� �Ϸ� �� �ڵ� �̵� �����
        StartCoroutine(RestartAutoMovementAfterDelay(moveTime));
    }

    // ���ġ �� �ڵ� �̵� �����
    private IEnumerator RestartAutoMovementAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        StartAutoMovement();
    }

    // ���� �̵� �޼��� (�ߺ� �ڵ� ���� �� �÷��� ����)
    private void MoveToSlotInternal(int targetIndex, float duration, Ease easeType)
    {
        if (slotManager == null || slotManager.slotPositions == null ||
            targetIndex < 0 || targetIndex >= slotManager.slotPositions.Length)
        {
            return;
        }

        // ���� DOTween �ִϸ��̼� ����
        transform.DOKill();

        isMoving = true;

        // �ε巯�� �̵��� ���� ����
        Vector3 targetPosition = slotManager.slotPositions[targetIndex].position;

        transform.DOMove(targetPosition, duration)
            .SetEase(easeType)
            .OnComplete(() =>
            {
                isMoving = false;
                // �̵� �Ϸ� �� ���� �ε��� Ȯ��
                currentIndex = targetIndex;
            });
    }

}