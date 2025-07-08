using UnityEngine;
/// <summary>
/// 게임의 전반적인 매니저 클래스입니다.
/// 슬롯 보드, 오브젝트 풀 관리 및 튜토리얼 진행, 점수 관리 등을 담당합니다.
/// </summary>
public class GameManager : Singleton<GameManager>
{
    public SlotBoardManager board;
    public ObjectPool pool;
    public Transform tutorialObj;
    public int score = 0;
    public bool isTutorial = true;
    private void Awake()
    {
        pool.SetObjectPool();
        FillBoard(); // 시작 채우기
        TimeStop();
    }
    /// <summary>
    /// 게임 시간 정지 (Time.timeScale = 0)
    /// </summary>
    public void TimeStop()
    {
        Time.timeScale = 0f;
    }
    /// <summary>
    /// 게임 시간 재개 (Time.timeScale = 1)
    /// </summary>
    public void TimeStart()
    {
        Time.timeScale = 1f;

    }

    /// <summary>
    /// 슬롯 보드 각 칼럼에 우유 오브젝트를 채우는 초기화 함수
    /// 튜토리얼 모드에서는 특정 위치에 지정 우유 배치
    /// </summary>
    void FillBoard()
    {
        bool isTutorial = true;
        foreach (var slot in board.slotColumns)
        {
            for (int i = 0; i < 6; i++)
            {
                GameObject milks;

                if (isTutorial && i == 1)
                {
                    milks = pool.GetMilk(40);
                    isTutorial = false;
                }
                else
                {
                    milks = pool.GetRandomMilk();
                }
                milks.SetActive(true);
                slot.AddMilks(milks.GetComponent<Milk>(), true);
            }
        }
    }

    /// <summary>
    /// 점수를 추가하는 함수
    /// </summary>
    /// <param name="i">더할 점수</param>
    public void AddScore(int i)
    {
        score = score + i;
    }
    /// <summary>
    /// 튜토리얼 진행 중 tutorialObj 앞쪽으로 Raycast를 쏘아 우유를 클릭했을 때 동작 처리
    /// </summary>
    public void TutorialRay()
    {
        // tutorialObj 기준으로 앞쪽 방향으로 Ray 쏘기
        Ray ray = new Ray(tutorialObj.position, tutorialObj.forward);
        RaycastHit hit;

        if (Physics.Raycast(ray, out hit, 10f))
        {
            if (hit.collider.CompareTag("Milk"))
            {
                if (isTutorial)
                {
                    hit.collider.GetComponent<Milk>().OnSelect();
                    isTutorial = false;
                    TimeStart();
                    ViewManager.Instance.Tutorial.gameObject.SetActive(false);
                }

            }

        }
    }
}
