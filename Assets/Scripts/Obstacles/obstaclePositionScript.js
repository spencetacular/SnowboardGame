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

    // This method is required by the IComparable interface.
    public function CompareTo (other : obstaclePositionScript)
    {
        if (other == null)
        {
            return 1;
        }

        // Return the difference in power.
        return yPos - other.yPos ;
    }
}