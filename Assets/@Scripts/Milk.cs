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
    private bool isMoving = false; // 이동 중인지 확인하는 플래그

    public void OnSelect()
    {
        // 자동 이동 중지
        StopAutoMovement();
        // 슬롯 매니저에서 제거 및 재배치
        slotManager.RemoveMilkAndRearrange(this);
        // 오브젝트 풀로 반환
        GameManager.Instance.pool.ReturnMilk(gameObject);
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
            // 이동 중이면 대기
            if (isMoving)
            {
                yield return new WaitForSeconds(0.1f);
                continue;
            }

            yield return new WaitForSeconds(0.9f); // 1초 대기

            // 슬롯 매니저나 위치 배열이 유효한지 확인
            if (slotManager == null || slotManager.slotPositions == null)
            {
                yield break;
            }

            if (currentIndex + 1 >= slotManager.slotPositions.Length)
            {
                // 마지막 슬롯에 도달하면 제거
                slotManager.RemoveMilkOnly(this);
                slotManager.AddRandomMilk();
                GameManager.Instance.pool.ReturnMilk(gameObject);
                yield break;
            }

            // 다음 슬롯으로 이동
            currentIndex++;

            // 부드러운 이동을 위해 현재 속도 유지
            MoveToSlotInternal(currentIndex, 1f, Ease.Linear);
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

        // 자동 이동 중지 (재배치 중에는 자동 이동 방지)
        StopAutoMovement();

        currentIndex = slotIndex;

        // 현재 위치에서 목표 위치까지의 거리에 따라 이동 시간 계산
        float distance = Vector3.Distance(transform.position, slotManager.slotPositions[slotIndex].position);
        float moveTime = Mathf.Clamp(distance / 10f, 0.1f, 0.5f); // 거리 기반 시간 계산

        MoveToSlotInternal(slotIndex, moveTime, Ease.OutCubic);

        // 이동 완료 후 자동 이동 재시작
        StartCoroutine(RestartAutoMovementAfterDelay(moveTime));
    }

    // 재배치 후 자동 이동 재시작
    private IEnumerator RestartAutoMovementAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        StartAutoMovement();
    }

    // 내부 이동 메서드 (중복 코드 제거 및 플래그 관리)
    private void MoveToSlotInternal(int targetIndex, float duration, Ease easeType)
    {
        if (slotManager == null || slotManager.slotPositions == null ||
            targetIndex < 0 || targetIndex >= slotManager.slotPositions.Length)
        {
            return;
        }

        // 이전 DOTween 애니메이션 중지
        transform.DOKill();

        isMoving = true;

        // 부드러운 이동을 위한 설정
        Vector3 targetPosition = slotManager.slotPositions[targetIndex].position;

        transform.DOMove(targetPosition, duration)
            .SetEase(easeType)
            .OnComplete(() =>
            {
                isMoving = false;
                // 이동 완료 후 현재 인덱스 확인
                currentIndex = targetIndex;
            });
    }

}