#pragma strict

import System.Collections.Generic;

public var userScores = new List.<userScoreScript>();
var topScoresText : UnityEngine.UI.Text;
public var initials : GameObject;
var score : int;

public class topScoresScript extends MonoBehaviour
{
    function Start ()
    {
    	topScoresText = GetComponent(UnityEngine.UI.Text);
//    	topScoresText.text = "TOP SCORES: " + "\n";
        var userScores = new List.<userScoreScript>();

        score = GameObject.Find("score").GetComponent(scoreScript).score;

        initials.SetActive(false);
        GetTopScores();
        CompareUserScore(score);
        SetTopScoresText();
    }

    function GetTopScores () {

 		userScores.Add (new userScoreScript(10, "SKC"));
        userScores.Add (new userScoreScript(8, "ASS"));
        userScores.Add (new userScoreScript(9, "BUT"));
        userScores.Add (new userScoreScript(7, "FUK"));
        userScores.Add (new userScoreScript(5, "QQQ"));
        userScores.Add (new userScoreScript(6, "FUK"));
        userScores.Add (new userScoreScript(4, "FUK"));
        userScores.Add (new userScoreScript(3, "BUT"));
        userScores.Add (new userScoreScript(2, "FUK"));
        userScores.Add (new userScoreScript(1, "FUK"));

        userScores.Sort();	
    }

    function CompareUserScore (score : int) {
//    	var userScore = new userScoreScript;
//    	var scoreToReplace  = 0;

    	for (var u in userScores) {
    		if (score >= u.score) {
//    			scoreToReplace = u.score;
    			initials.SetActive(true);
    			break;
    		}
    		
    	}
//    	Debug.Log(scoreToReplace);
    }

    function AddNewTopScore (ini : String) {
    	Debug.Log(ini);
    	///TODO: replace with actual score
    	initials.SetActive(false);
    	var newTopUser = new userScoreScript(score, ini);
		Debug.Log(newTopUser.initials + newTopUser.score);


		for (var u in userScores) {
    		if (newTopUser.score >= u.score) {
				u.initials = newTopUser.initials;
				u.score = newTopUser.score;
    			break;
    		}
    		
    	}

    	userScores.Sort();	
    	SetTopScoresText();
    }

    function SetTopScoresText () {

		topScoresText.text = "TOP SCORES: " + "\n";
    	 for (var u in userScores)
        	topScoresText.text += u.initials + " " + u.score + "\n";
    }

}