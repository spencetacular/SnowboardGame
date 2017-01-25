#pragma strict
import System;  

public class userScoreScript implements IComparable.<userScoreScript> {
    public var score : int; 
    public var initials : String;

    public function userScoreScript (s : int, i : String) {
        score = s;
        initials = i;
    }

    public function CompareTo (other : userScoreScript) {

         if (other == null) {
            return 1;
        }

        return other.score - score;
    }
}