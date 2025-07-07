using UnityEngine;

public class PauseManager : MonoBehaviour
{
	private void Start()
	{
	}

	private void Resume()
	{
		Time.timeScale = 1f;
	}

	private void Pause()
	{
		Time.timeScale = 0f;
	}
}
