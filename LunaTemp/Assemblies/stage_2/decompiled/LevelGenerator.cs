using UnityEngine;

public class LevelGenerator : MonoBehaviour
{
	public GameObject platform;

	public GameObject mushroom;

	public float spawnHeight;

	public int division = 3;

	public int numberOfPlatform;

	public float levelWidth = 3f;

	public float minY = 1f;

	public float maxY = 1.5f;

	private void Start()
	{
		Vector3 spawnPos = new Vector3(0f, spawnHeight, 0f);
		for (int i = 0; i < numberOfPlatform; i++)
		{
			spawnPos.y += Random.Range(minY, maxY);
			spawnPos.x = Random.Range(0f - levelWidth, levelWidth);
			Object.Instantiate(platform, spawnPos, Quaternion.Euler(0f, 0f, 0f));
			if (i % division == 0)
			{
				spawnPos.y += 0.4f;
				Object.Instantiate(mushroom, spawnPos, Quaternion.Euler(0f, 0f, 0f));
			}
		}
	}
}
