using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(fileName = "MilkData", menuName = "Milk/Milks Data")]
public class MilkData : ScriptableObject
{
    public string milkName;
    public GameObject prefab;
    public int milkKey;
}
