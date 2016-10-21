#pragma strict
import System;  

public class userScoreScript implements IComparable.<userScoreScript>
{
  
    public var score : int; 
    public var initials : String;


    public function userScoreScript (s : int, i : String)
    {
        score = s;
        initials = i;
    }

    // This method is required by the IComparable interface.
    public function CompareTo (other : userScoreScript)
    {
        if (other == null)
        {
            return 1;
        }

        // Return the difference in power.
        return other.score - score;
    }
}