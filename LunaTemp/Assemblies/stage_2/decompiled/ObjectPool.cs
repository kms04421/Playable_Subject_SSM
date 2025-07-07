using System.Collections.Generic;
using UnityEngine;

public class ObjectPool : MonoBehaviour
{
	private GameObject prefab;

	private Queue<GameObject> objectPool;

	private Transform poolContainer;

	public void Initialize(GameObject prefabToPool, int poolSize)
	{
		prefab = prefabToPool;
		objectPool = new Queue<GameObject>();
		poolContainer = new GameObject("Pool_" + prefab.name).transform;
		poolContainer.parent = base.transform;
		for (int i = 0; i < poolSize; i++)
		{
			CreateNewObject();
		}
	}

	private void CreateNewObject()
	{
		GameObject obj = Object.Instantiate(prefab, poolContainer);
		obj.SetActive(false);
		objectPool.Enqueue(obj);
	}

	public GameObject GetObject()
	{
		if (objectPool.Count == 0)
		{
			CreateNewObject();
		}
		GameObject obj = objectPool.Dequeue();
		obj.SetActive(true);
		return obj;
	}

	public void ReturnToPool(GameObject obj)
	{
		obj.SetActive(false);
		obj.transform.parent = poolContainer;
		objectPool.Enqueue(obj);
	}

	public void ReturnAllToPool()
	{
		GameObject[] activeObjects = GameObject.FindGameObjectsWithTag(prefab.tag);
		GameObject[] array = activeObjects;
		foreach (GameObject obj in array)
		{
			if (obj.name.Contains(prefab.name))
			{
				ReturnToPool(obj);
			}
		}
	}
}
