#pragma strict

import System.Collections.Generic;

public var userScores = new List.<userScoreScript>();
var topScoresText : UnityEngine.UI.Text;
public var initials : GameObject;
public var score : int;
public var soundEffects : soundEffectsScript;



public class topScoresScript extends MonoBehaviour
{
    function Start ()
    {
    	topScoresText = GetComponent(UnityEngine.UI.Text);
        var userScores = new List.<userScoreScript>();
        initials.SetActive(false);
    }

    function GetTopScores () {

 		userScores.Add (new userScoreScript(10000, "SKC"));
        userScores.Add (new userScoreScript(80000, "ASS"));
        userScores.Add (new userScoreScript(9000, "BUT"));
        userScores.Add (new userScoreScript(7000, "FUK"));
        userScores.Add (new userScoreScript(5000, "QQQ"));
        userScores.Add (new userScoreScript(6000, "FUK"));
        userScores.Add (new userScoreScript(4000, "FUK"));
        userScores.Add (new userScoreScript(3000, "BUT"));
        userScores.Add (new userScoreScript(2000, "FUK"));
        userScores.Add (new userScoreScript(1000, "FUK"));

        userScores.Sort();	
    }

    function GameOver (score : int) {
    	GetTopScores();
        CompareUserScore(score);
        SetTopScoresText();
		

    }

    function CompareUserScore (score : int) {
		var newHighScore = false;
    	for (var u in userScores) {
    		if (score >= u.score) {
				initials.GetComponent(initialsScript).gameOver = true;
    			initials.SetActive(true);
    			soundEffects.Success();
    			newHighScore = true;
    			break;
    		}
    		
    	}

    	if (!newHighScore) {
    		GameObject.Find("canvasGameOver").GetComponent(ganeOverControlsScript).PressStartToPlay();
    	}
    }

    function AddNewTopScore (ini : String) {
    	Debug.Log("called");
    	///TODO: replace with actual score
//    	initials.SetActive(false);	
    	var newTopUser = new userScoreScript(score, ini);
   
		for (var u in userScores) {
    		if (newTopUser.score >= u.score) {
				u.initials = newTopUser.initials;
				u.score = newTopUser.score;
    			break;
    		}	
    	}

    	userScores.Sort();	
    	SetTopScoresText();
		soundEffects.Success();
    	GameObject.Find("canvasGameOver").GetComponent(ganeOverControlsScript).PressStartToPlay();
    }

    function SetTopScoresText () {

		topScoresText.text = "TOP SCORES: " + "\n";
    	 for (var u in userScores)
        	topScoresText.text += u.initials + " " + u.score + "\n";
    }
}