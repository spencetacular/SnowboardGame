#pragma strict
import UnityEngine.SocialPlatforms; 

public var swipeLeaderboard : swipeLeaderboardScript;
public var soundEffects : soundEffectsScript;
public var ID : String;

function Start () {

	#if UNITY_IPHONE
		ID = "TopScores01";
	#endif
	#if UNITY_ANDROID
		ID = "CgkI2tW9p4sZEAIQAA";
	#endif
}

function ReportScoreAfterUserAuth ( score : int ) {
	Social.ReportScore(score, ID, function (success) {
		if (success)
			Debug.Log("Score Reported");
		});
}

function ReportScore (score : int) {
	Social.localUser.Authenticate (function (success) {
		if (success) {
			 ReportScoreAfterUserAuth(score);
		}
	});


}

function Update () {

	if (swipeLeaderboard.Swipe() == "up") { 

		Social.ShowLeaderboardUI();
		soundEffects.Select();
		
	}

	if (swipeLeaderboard.Swipe() == "enter") { 

		soundEffects.levelToLoad = "StartScreen";
		soundEffects.Load();
		
	}


}