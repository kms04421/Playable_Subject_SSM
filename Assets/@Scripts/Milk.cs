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
    /// <summary>
    /// 우유가 선택되었을 때 호출되는 메서드.
    /// </summary>
    public void OnSelect()
    {

        slotManager.RemoveMilkAndRearrange(this);

    }
    /// <summary>
    /// 우유 초기화.
    /// </summary>
    /// <param name="manager">슬롯 매니저</param>
    /// <param name="startIndex">시작 슬롯 인덱스</param>
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
    /// <summary>
    /// 우유를 한 슬롯 위로 부드럽게 이동시킵니다.
    /// 맨 위 슬롯이면 이동하지 않습니다.
    /// </summary>
    /// <param name="duration">이동 시간(초)</param>
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
    /// <summary>
    /// 자동 이동 코루틴을 시작합니다.
    /// 이미 이동 중이면 기존 코루틴을 정지하고 다시 시작합니다.
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
    /// 자동 이동 코루틴을 중지하고 DOTween 애니메이션을 정지합니다.
    /// </summary>
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
    /// <summary>
    /// 자동으로 슬롯을 아래로 이동시키는 코루틴입니다.
    /// 이동 중이면 대기하며, 마지막 슬롯에 도달하면 리스트에서 제거 및 새로운 우유를 추가합니다.
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
    /// 강제로 특정 슬롯 인덱스로 부드럽게 이동시킵니다.
    /// </summary>
    /// <param name="slotIndex">목표 슬롯 인덱스</param>
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
    /// 내부 이동 메서드.
    /// 실제 DOTween 애니메이션으로 위치를 이동합니다.
    /// </summary>
    /// <param name="targetIndex">목표 슬롯 인덱스</param>
    /// <param name="duration">이동 시간(초)</param>
    /// <param name="easeType">Ease 타입</param>
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