using UnityEngine;

public class PlatformScript : MonoBehaviour
{
	public float jumpForce = 10f;

	private void OnCollisionEnter2D(Collision2D collision)
	{
		if (collision.rigidbody.velocity.y <= 1f)
		{
			Rigidbody2D rb = collision.collider.GetComponent<Rigidbody2D>();
			if (rb != null)
			{
				Vector2 velocity = rb.velocity;
				velocity.y = 0f;
				velocity.y = jumpForce;
				rb.velocity = velocity;
			}
		}
	}
}
