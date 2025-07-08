using UnityEngine;
/// <summary>
/// ������ �������� �Ŵ��� Ŭ�����Դϴ�.
/// ���� ����, ������Ʈ Ǯ ���� �� Ʃ�丮�� ����, ���� ���� ���� ����մϴ�.
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
        FillBoard(); // ���� ä���
        TimeStop();
    }
    /// <summary>
    /// ���� �ð� ���� (Time.timeScale = 0)
    /// </summary>
    public void TimeStop()
    {
        Time.timeScale = 0f;
    }
    /// <summary>
    /// ���� �ð� �簳 (Time.timeScale = 1)
    /// </summary>
    public void TimeStart()
    {
        Time.timeScale = 1f;

    }

    /// <summary>
    /// ���� ���� �� Į���� ���� ������Ʈ�� ä��� �ʱ�ȭ �Լ�
    /// Ʃ�丮�� ��忡���� Ư�� ��ġ�� ���� ���� ��ġ
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
    /// ������ �߰��ϴ� �Լ�
    /// </summary>
    /// <param name="i">���� ����</param>
    public void AddScore(int i)
    {
        score = score + i;
    }
    /// <summary>
    /// Ʃ�丮�� ���� �� tutorialObj �������� Raycast�� ��� ������ Ŭ������ �� ���� ó��
    /// </summary>
    public void TutorialRay()
    {
        // tutorialObj �������� ���� �������� Ray ���
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
