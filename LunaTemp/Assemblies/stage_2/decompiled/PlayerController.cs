using Luna.Unity;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class PlayerController : MonoBehaviour
{
	public GameManager _manager;

	public float moveSpeed = 10f;

	private float deltaX;

	private float deltaY;

	private bool isPressed;

	public GameObject hand;

	public GameObject introText;

	public GameObject targetObj;

	private Rigidbody2D rb;

	private SpriteRenderer ren;

	public Sprite[] player;

	public Transform cam;

	[SerializeField]
	private float ClampledValue = 2f;

	private float lastPosition;

	private float maxHeight;

	public float offScreen;

	[SerializeField]
	private Animator anim;

	private void Awake()
	{
		ren = GetComponent<SpriteRenderer>();
		if (_manager.type == GameManager.CharatcerType.Dog)
		{
			ren.sprite = player[0];
		}
		else
		{
			ren.sprite = player[1];
		}
	}

	private void Start()
	{
		rb = GetComponent<Rigidbody2D>();
		lastPosition = base.transform.position.y;
		maxHeight = lastPosition;
		StartCoroutine(GameManager.instance.GameStart());
	}

	private void Update()
	{
		TouchInput();
		if (base.transform.position.y <= cam.transform.position.y - offScreen)
		{
			endGame();
			Analytics.LogEvent(Analytics.EventType.LevelFailed);
		}
		float curPos = base.transform.position.y - lastPosition;
		if (curPos > maxHeight)
		{
			int Distance = Mathf.RoundToInt(curPos);
			maxHeight = curPos;
			GameManager.instance.score.text = Distance.ToString();
		}
		ClampPositions();
	}

	private void FixedUpdate()
	{
		if ((double)rb.velocity.y < -0.2)
		{
			anim.Play((_manager.type == GameManager.CharatcerType.Dog) ? "DogFall" : "CatFall");
		}
		else
		{
			anim.Play((_manager.type == GameManager.CharatcerType.Dog) ? "DogJump" : "CatJump");
		}
	}

	private void TouchInput()
	{
		Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		mousePos.z = 0f;
		if (Input.GetMouseButtonDown(0))
		{
			hand.SetActive(false);
			introText.SetActive(false);
			deltaX = mousePos.x - base.transform.position.x;
			deltaY = mousePos.y - base.transform.position.y;
			isPressed = true;
		}
		if (Input.GetMouseButton(0) && isPressed)
		{
			rb.transform.position = new Vector2(mousePos.x - deltaX, base.transform.position.y);
			if ((double)base.transform.position.x > 0.1)
			{
				ren.flipX = false;
			}
			else if ((double)base.transform.position.x < -0.1)
			{
				ren.flipX = true;
			}
		}
		if (Input.GetMouseButtonUp(0))
		{
			isPressed = false;
		}
	}

	private void ClampPositions()
	{
		Vector3 clampedPosition = base.transform.position;
		clampedPosition.x = Mathf.Clamp(clampedPosition.x, 0f - ClampledValue, ClampledValue);
		base.transform.position = clampedPosition;
	}

	private void endGame()
	{
		base.gameObject.SetActive(false);
		GameManager.instance.StartCoroutine("ShowEndCard");
	}
}
