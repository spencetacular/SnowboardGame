#pragma strict

import System.Collections.Generic;
import UnityEngine.UI;

public var userScores = new List.<userScoreScript>();
var topScoresInitials : Text;
var topScoresScores : Text;
public var initials : GameObject;
public var score : int;
public var soundEffects : soundEffectsScript;
public var finalScoreTop10 : Text;
public var finalScoreNotTop10 : GameObject;
public var finalScoreNotTop10Text : Text;

var canvasControls : GameObject;

public class topScoresScript extends MonoBehaviour {

    function Start () {
//    	topScoresText = GetComponent(Text);
        var userScores = new List.<userScoreScript>();
        initials.SetActive(false);
        finalScoreNotTop10.SetActive(false);

      
//		PlayerPrefs.DeleteAll();
//		GenerateFakeScores();


    }

    function GenerateFakeScores() {
		for (var i = 0; i < 10 ; i++ ) {

			PlayerPrefs.SetInt(i.ToString()+ "Score", 1000  - i );
			PlayerPrefs.SetString(i.ToString()+ "Ini", "ASS" );
		}
    	
    }

    function GetTopScores () {

    	if (!PlayerPrefs.GetInt("0Score"))
    		GenerateFakeScores();
    	

// 		userScores.Add (new userScoreScript(10000, "SKC"));
//        userScores.Add (new userScoreScript(80000, "ASS"));
//        userScores.Add (new userScoreScript(9000, "BUT"));
//        userScores.Add (new userScoreScript(7000, "FUK"));
//        userScores.Add (new userScoreScript(5000, "QQQ"));
//        userScores.Add (new userScoreScript(6000, "FUK"));
//        userScores.Add (new userScoreScript(4000, "FUK"));
//        userScores.Add (new userScoreScript(3000, "BUT"));
//        userScores.Add (new userScoreScript(2000, "FUK"));
//        userScores.Add (new userScoreScript(1000, "FUK"));

		for (var i = 0; i < 10 ; i++ ) {

			var score = PlayerPrefs.GetInt(i.ToString()+ "Score");
			var ini = PlayerPrefs.GetString(i.ToString()+ "Ini");
			 userScores.Add (new userScoreScript(score, ini));
		}

        userScores.Sort();	
    }


    function GameOver (score : int) {
    	GetTopScores();
        CompareUserScore(score);
        SetTopScoresText();

//        Social.ShowLeaderboardUI();
		

    }

    function LogScore (score : int, time : int) {

    	if(!PlayerPrefs.GetString("Log")) {
    		PlayerPrefs.SetString("Log", "SCORE" + "\t" + "\t" + "TIME" + "\n" );
    		Debug.Log("Called");
    	}
    	var log = PlayerPrefs.GetString("Log");
    	var log2 = log + score + "\t" + "\t" + time + "\n";
    	Debug.Log(log2);
    	PlayerPrefs.DeleteKey("Log");
    	PlayerPrefs.SetString("Log", log2);
    	 
    }

    function CompareUserScore (score : int) {
		var newHighScore = false;
    	for (var u in userScores) {
    		if (score >= u.score) {
				initials.GetComponent(initialsScript).gameOver = true;
    			initials.SetActive(true);
    			finalScoreTop10.text = "FINAL SCORE: " + score;
    			soundEffects.Success();
    			newHighScore = true;
    			canvasControls.SetActive(true);
    			break;
    		}
    		
    	}

    	if (!newHighScore) {
    		finalScoreNotTop10.SetActive(true);
    		finalScoreNotTop10Text.text = score.ToString();
    		GameObject.Find("canvasGameOver").GetComponent(ganeOverControlsScript).PressStartToPlay();
    	}
    }

    function AddNewTopScore (ini : String) {
 
		var newTopUser = new userScoreScript(score, ini);
   		userScores.Add(newTopUser);
    	userScores.Sort();	
    	SetTopScoresText();
		soundEffects.Success();

		for (var j = 0; j < 10; j++) {
			PlayerPrefs.SetInt(j.ToString()+ "Score",  userScores[j].score);
			PlayerPrefs.SetString(j.ToString()+ "Ini", userScores[j].initials);
		}
    	GameObject.Find("canvasGameOver").GetComponent(ganeOverControlsScript).PressStartToPlay();
    }

    function AddComma( score : int) {
    	var s = score.ToString().Format("{0:#,###0}",score);
    	return s;
     }

    function SetTopScoresText () {
		topScoresInitials.text = "";
		topScoresScores.text = "";
		
		for (var i = 0; i < 10; i++) {
			topScoresInitials.text += userScores[i].initials + "\n";
			topScoresScores.text += AddComma(userScores[i].score) + "\n";
		}
    }
}