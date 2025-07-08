using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    void Update()
    {
        if (Input.GetMouseButtonDown(0)) // 마우스 왼쪽 버튼 클릭
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit))
            {            
                // 예: Milk라는 태그가 있는 경우
                if (hit.collider.CompareTag("Milk"))
                {
                    // 원하는 로직 실행
                    hit.collider.GetComponent<Milk>().OnSelect();
                }
            }
        }
    }
}
