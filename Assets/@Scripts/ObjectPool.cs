using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class ObjectPool : MonoBehaviour
{
    public List<MilkData> MilksDataList;
    private List<GameObject> milksList;
   public void SetObjectPool()
   {
        milksList = new List<GameObject>();
        foreach (var milk in MilksDataList)        
            for (int i = 0; i < 20; i++)
            {
                GameObject instance = Instantiate(milk.prefab);
                instance.transform.SetParent(transform, false); 
                instance.SetActive(false);
                milksList.Add(instance);
            }
        
   }
    public GameObject GetRandomMilk()
    {
        int index = Random.Range(0, milksList.Count-1);
        GameObject milk = milksList[index];
      
        milksList.RemoveAt(index);
        return milk;
    }
    public void ReturnMilk(GameObject milk)
    {
        milk.SetActive(false);
        milk.transform.SetParent(transform); // 풀 오브젝트로 복귀
        milksList.Add(milk);
    }
}
