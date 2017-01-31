#pragma strict
import System.Collections;
import UnityEngine.SocialPlatforms;
import UnityEngine.UI;

public var scores : Text;
public var score : Text;
public var users : Text;
public var userName : Text;
//var loggedIn = false;
//var leaderboardFound = false;
public var ID : String;

function Start () {
	#if UNITY_IPHONE
		ID = "TopScores01";
	#endif
	#if UNITY_ANDROID
		ID = "CgkI2tW9p4sZEAIQAA";
	#endif

	CheckUser();
//	LoadLeaderboard();
}


function CheckUser () {

	Social.localUser.Authenticate (function (success) {
        if (success) {
//        	loggedIn = true;
            Debug.Log ("Authentication successful");
            var userInfo : String = "Username: " + Social.localUser.userName + 
                "\nUser ID: " + Social.localUser.id ;
               
            Debug.Log (userInfo);
			userName.text =  Social.localUser.userName;
        }
        else {
            Debug.Log ("Authentication failed");
            userName.text = "LOG INTO GAME CENTER\nTO POST YOUR HIGH SCORE";
            userName.fontSize = 18;
        }
    });

}

function LoadLeaderboard () {
	Social.localUser.Authenticate (function (success) {
		if (success) {
			LoadLeaderboardAfterUserAuth();
		}
	});
}

function LoadLeaderboardAfterUserAuth () {
	var scoresText : String;
	var usersText : String;
	var leaderboard: ILeaderboard = Social.CreateLeaderboard();
	leaderboard.id = ID;
	leaderboard.LoadScores(function(sucess) {
		if (sucess) {
			Debug.Log("Received " + leaderboard.scores.Length + " scores");
			for (var score: IScore in leaderboard.scores) {
				scoresText += score.value.ToString() + "\n";
				Debug.Log("XXXXX: " + score.value.ToString());
				usersText += score.userID + "\n";
				Debug.Log("YYYYY: " +  score.userID);
//				scoresText += "99" + "\n";
//				usersText += "SKC" + "\n";
			}
			scores.text = scoresText;
			users.text = usersText;

			Debug.Log("scoresText: " + scoresText);
			Debug.Log("usersText: " + usersText);
		}
		else {
			Debug.Log("Leaderboard Not Found");
		}
	}
	);

//	scores.text = scoresText;
//	users.text = usersText;

//	scoresText = "1" + "\n" + 2 + "\n";
//	usersText = "SKC" + "\n" + "JFK" + "\n";

//	scores.text = scoresText;
//	users.text = usersText;
//
//	Debug.Log("scoresText: " + scoresText);
//	Debug.Log("usersText: " + usersText);

}

function ReportScoreAfterUserAuth ( score : int ) {
	Social.ReportScore(66666, ID, function (success) {
		if (success)
			Debug.Log("Score Reported");
		});
}

function ReportScore (score : int) {
	Social.localUser.Authenticate (function (success) {
		if (success) {
			 ReportScoreAfterUserAuth(66666);
		}
	});


}




