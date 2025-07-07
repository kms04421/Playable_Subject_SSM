using UnityEngine;

public class ArmRotation : MonoBehaviour
{
	public int rotationOffset = 90;

	private void Update()
	{
		Vector3 difference = Camera.main.ScreenToWorldPoint(Input.mousePosition) - base.transform.position;
		difference.Normalize();
		float rotZ = Mathf.Atan2(difference.y, difference.x) * 57.29578f;
		base.transform.rotation = Quaternion.Euler(0f, 0f, rotZ + (float)rotationOffset);
	}
}
