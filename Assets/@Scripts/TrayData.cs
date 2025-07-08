using System.Collections.Generic;
public class TrayData
{
    public  List<int> milks = new List<int>();
    public int Key = -1;
    public bool isAnswer = false;
    public bool isMove = true;

    public TrayData() { }
    
    public TrayData(int key)
    {
        Setkey(key);
        milks.Add(key);
        milks.Add(key);
    }
    public void Setkey(int key)
    {
        Key = key;
    }
    public int GetKey()
    {
        return Key;
    }
    public void SetIsAnswer(bool value)
    {
        isAnswer = value;
    }

    public bool GetIsAnswer()
    {
        return isAnswer;
    }
}
