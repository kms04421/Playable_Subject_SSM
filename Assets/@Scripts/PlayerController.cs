using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    void Update()
    {
        if (Input.GetMouseButtonDown(0)) // ���콺 ���� ��ư Ŭ��
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit))
            {            
                // ��: Milk��� �±װ� �ִ� ���
                if (hit.collider.CompareTag("Milk"))
                {
                    // ���ϴ� ���� ����
                    hit.collider.GetComponent<Milk>().OnSelect();
                }
            }
        }
    }
}
