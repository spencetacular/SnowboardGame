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
var fakeInitials : String[];
var canvasControls : GameObject;

public class topScoresScript extends MonoBehaviour {

    function Start () {
        var userScores = new List.<userScoreScript>();
        initials.SetActive(false);
        finalScoreNotTop10.SetActive(false);
    }

    function GenerateFakeScores() {

    	fakeInitials = ["SKC", "STS", "LBJ", "FDR", "WJC", "BHO", "JFK", "LCK", "HGW", "NPH"];

		for (var i = 0; i < 10 ; i++ ) {
			PlayerPrefs.SetInt(i.ToString()+ "Score", 10000  - i * 1000 );
			PlayerPrefs.SetString(i.ToString()+ "Ini", fakeInitials[i] );
		}
    }

    function GetTopScores () {

    	if (!PlayerPrefs.GetInt("0Score"))
    		GenerateFakeScores();
 
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
    }

    function LogScore (score : int, time : int) {

    	if(!PlayerPrefs.GetString("Log"))
    		PlayerPrefs.SetString("Log", "SCORE" + "\t" + "\t" + "TIME" + "\n" );

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