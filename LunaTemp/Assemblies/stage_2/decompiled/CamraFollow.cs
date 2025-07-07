using UnityEngine;

public class CamraFollow : MonoBehaviour
{
	public Transform target;

	public float smoothSpeed = 0.3f;

	private void FixedUpdate()
	{
		if (target.position.y > base.transform.position.y)
		{
			Vector3 position = base.transform.position;
			Vector3 newPos = new Vector3(position.x, target.position.y, position.z);
			position = Vector3.Lerp(position, newPos, smoothSpeed * Time.deltaTime);
			base.transform.position = position;
		}
	}
}
