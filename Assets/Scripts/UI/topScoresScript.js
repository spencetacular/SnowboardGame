#pragma strict

import System.Collections.Generic;

public var userScores = new List.<userScoreScript>();

public class topScoresScript extends MonoBehaviour
{
    function Start ()
    {
        // This is how you create a list.  Notice how the
        // type is specified in the angle brackets (< >).
        var userScores = new List.<userScoreScript>();

        // Here you add 3 BadGuys to the List
        userScores.Add (new userScoreScript(999999, "SKC"));
        userScores.Add (new userScoreScript(1618, "ASS"));
        userScores.Add (new userScoreScript(314159, "BUT"));
        userScores.Add (new userScoreScript(33333, "FUK"));
        userScores.Add (new userScoreScript(874111, "ASS"));
        userScores.Add (new userScoreScript(111111, "FUK"));
        userScores.Add (new userScoreScript(123455, "FUK"));
        userScores.Add (new userScoreScript(44444, "BUT"));
        userScores.Add (new userScoreScript(44444, "FUK"));
        userScores.Add (new userScoreScript(44444, "FUK"));

        userScores.Sort();

        for (var u in userScores)
        {
            print (u.score);
        }

        // This clears out the list so that it is empty.
//        userScores.Clear();
    }
}