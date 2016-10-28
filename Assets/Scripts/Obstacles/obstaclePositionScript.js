import System;  

public class obstaclePositionScript implements IComparable.<obstaclePositionScript>
{
    public var yPos : float; 
    public var name : String;
    public var orderInLayer : int;

    public function obstaclePositionScript (y : float, n : String)
    {
        yPos = y;
        name = n;
    }

    public function CompareTo (other : obstaclePositionScript)
    {
        if (other == null)
            return 1;
        return  Mathf.FloorToInt(other.yPos * 1000) -  Mathf.FloorToInt(yPos * 1000) ;
    }
}