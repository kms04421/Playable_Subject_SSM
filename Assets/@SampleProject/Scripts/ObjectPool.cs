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
        
        // 풀 컨테이너 생성
        poolContainer = new GameObject($"Pool_{prefab.name}").transform;
        poolContainer.parent = transform;
        
        // 초기 오브젝트 생성
        for (int i = 0; i < poolSize; i++)
        {
            CreateNewObject();
        }
    }
    
    private void CreateNewObject()
    {
        GameObject obj = Instantiate(prefab, poolContainer);
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
        // 활성화된 모든 오브젝트를 찾아서 풀로 반환
        GameObject[] activeObjects = GameObject.FindGameObjectsWithTag(prefab.tag);
        foreach (GameObject obj in activeObjects)
        {
            if (obj.name.Contains(prefab.name))
            {
                ReturnToPool(obj);
            }
        }
    }
}
