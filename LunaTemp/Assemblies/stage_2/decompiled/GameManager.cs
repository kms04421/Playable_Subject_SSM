using System.Collections;
using Luna.Unity;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
	public enum CharatcerType
	{
		Cat,
		Dog
	}

	public static GameManager instance;

	public GameObject player;

	public Text endCardTitle;

	public Text endDescription;

	public Text endInstall;

	public Text score;

	public Text Intro;

	public Text retry;

	public Text Target;

	public GameObject endCard;

	public GameObject introText;

	public GameObject Hand;

	public GameObject targetObj;

	public GameObject retryBtn;

	private bool _gameEnded = false;

	private bool oneTime = false;

	[SerializeField]
	private Image iconIMG;

	[Header("Playground End Card fields")]
	[LunaPlaygroundField("End Card Title", 0, "End Card Details", false, null)]
	public string title;

	[LunaPlaygroundField("End Card Description", 0, "End Card Details", false, null)]
	public string description;

	[LunaPlaygroundField("End Card Install Text", 0, "End Card Details", false, null)]
	public string installText;

	[LunaPlaygroundField("End Card Retry Text", 0, "End Card Details", false, null)]
	public string retryText;

	[LunaPlaygroundField("Tutorial Text", 1, "Introduction Tutorial", false, null)]
	public string IntroText;

	[LunaPlaygroundField("Tutorial Target Text", 1, "Introduction Tutorial", false, null)]
	public string targetText;

	[LunaPlaygroundField("Text Colour", 2, "Change Text Colours", false, null)]
	public Color textColours;

	[Header("Choose Character")]
	[LunaPlaygroundField("Character Cat or Dog", 3, "Character Selection", false, null)]
	public CharatcerType type;

	[Header("Icon Sprite")]
	[LunaPlaygroundAsset("Icon Image", 4, "Change Icon")]
	public Texture2D iconTex;

	[LunaPlaygroundField("Retry Count", 5, "Number Retries", false, null)]
	public int maxCount;

	private static int _curentCount;

	private void Awake()
	{
		instance = this;
	}

	private void Start()
	{
		Sprite icon = Sprite.Create(iconTex, new Rect(0f, 0f, iconTex.width, iconTex.height), new Vector2(0.5f, 0.5f));
		iconIMG.sprite = icon;
		endCardTitle.text = title;
		endDescription.text = description;
		endInstall.text = installText;
		retry.text = retryText;
		Intro.text = IntroText;
		Target.text = targetText;
		endCardTitle.color = textColours;
		endDescription.color = textColours;
		endInstall.color = textColours;
		Intro.color = textColours;
		retry.color = textColours;
	}

	public IEnumerator GameStart()
	{
		player.SetActive(true);
		introText.SetActive(true);
		Hand.SetActive(true);
		Analytics.LogEvent(Analytics.EventType.LevelStart);
		Analytics.LogEvent(Analytics.EventType.TutorialStarted);
		yield return null;
	}

	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			StartCoroutine(ObjectiveMessage());
		}
	}

	private IEnumerator ObjectiveMessage()
	{
		if (!oneTime)
		{
			targetObj.SetActive(true);
			yield return new WaitForSecondsRealtime(2f);
			targetObj.SetActive(false);
			oneTime = true;
			Analytics.LogEvent(Analytics.EventType.TutorialComplete);
		}
	}

	public IEnumerator ShowEndCard()
	{
		endCard.SetActive(true);
		Hand.SetActive(false);
		introText.SetActive(false);
		targetObj.SetActive(false);
		Analytics.LogEvent(Analytics.EventType.EndCardShown);
		if (_curentCount >= maxCount)
		{
			EndGame();
			retryBtn.SetActive(false);
		}
		yield return new WaitForSeconds(2f);
		player.SetActive(false);
	}

	public void restartGame()
	{
		_curentCount++;
		SceneManager.LoadScene(SceneManager.GetActiveScene().name);
		Analytics.LogEvent(Analytics.EventType.LevelRetry);
		StartCoroutine(GameStart());
	}

	public void EndGame()
	{
		Playable.InstallFullGame();
		if (!_gameEnded)
		{
			LifeCycle.GameEnded();
			_gameEnded = true;
		}
	}

	public void InstallGame()
	{
		Playable.InstallFullGame();
	}
}
