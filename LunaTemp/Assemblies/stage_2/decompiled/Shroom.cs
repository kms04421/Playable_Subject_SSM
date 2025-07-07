using Luna.Unity;
using UnityEngine;

public class Shroom : MonoBehaviour
{
	public GameObject particle;

	private void OnTriggerEnter2D(Collider2D other)
	{
		if (other.CompareTag("Player"))
		{
			Object.Instantiate(particle, base.transform.position, Quaternion.identity);
			base.gameObject.SetActive(false);
			Analytics.LogEvent("Shroom_popped", 1);
		}
	}
}
