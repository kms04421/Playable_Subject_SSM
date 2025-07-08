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
    private bool isMoving = false; // 이동 중인지 확인하는 플래그

    public void OnSelect()
    {

        slotManager.RemoveMilkAndRearrange(this);

    }

    public void Init(SlotManager manager, int startIndex)
    {
        slotManager = manager;
        currentIndex = startIndex;
        isMoving = false;

        // 시작 위치 설정 (즉시 이동)
        if (slotManager.slotPositions != null && startIndex < slotManager.slotPositions.Length)
        {
            transform.position = slotManager.slotPositions[currentIndex].position;
        }

        gameObject.SetActive(true);
        // 자동 이동 시작
        StartAutoMovement();
    }
    public void MoveUpOneSlot(float duration)
    {
        int nextIndex = currentIndex - 1;
        if (nextIndex < 0) return; // 맨 위면 안 올라감

        currentIndex = nextIndex;
        isMoving = true;

        transform.DOMove(slotManager.slotPositions[currentIndex].position, duration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() => isMoving = false);
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
        // DOTween 애니메이션도 중지
        transform.DOKill();
        isMoving = false;
    }

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

    // 강제로 특정 슬롯으로 이동 (재배치용)
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


    // 내부 이동 메서드 
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