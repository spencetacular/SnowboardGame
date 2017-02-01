#pragma strict
import System.Collections;
import UnityEngine.SocialPlatforms;
import UnityEngine.UI;

public class socialLeaderboardScriptJS extends MonoBehaviour {


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

	Social.ShowLeaderboardUI();

//	Social.localUser.Authenticate (function (success) {
//		if (success) {
//			Social.ShowLeaderboardUI();
//		}
//	});
}

//function LoadLeaderboardAfterUserAuth () { 
//	Social.ShowLeaderboardUI();
//	
//}


//function LoadLeaderboardAfterUserAuth () {
//	var scoresText : String;
//	var usersIDs : String[];
//	var leaderboard: ILeaderboard = Social.CreateLeaderboard();
//	leaderboard.id = ID;
//	leaderboard.LoadScores(function(sucess) {
//		if (sucess) {
//			Debug.Log("Received " + leaderboard.scores.Length + " scores");
////			for (var score: IScore in leaderboard.scores) {
//			for (var i = 0 ; i < 10 ;  i++) {
//				var score: IScore = leaderboard.scores[1];
//				scoresText += score.value.ToString() + "\n";
//				usersIDs[i] =  score.userID;
//				Debug.Log("XXXXX: " + score.value.ToString());
////				usersText += score.userID + "\n";
//				Debug.Log("YYYYY: " +  score.userID);
////				scoresText += "99" + "\n";
////				usersText += "SKC" + "\n";
//				Debug.Log("array: " + leaderboard.scores[0]);
//			}
//			scores.text = scoresText;
////			users.text = usersText;
////			var userNames : String[];
//			Social.LoadUsers(usersIDs, LoadLeaderboardUsers(usersIDs) );
//			Debug.Log("scoresText: " + scoresText);
////			Debug.Log("userNames: " + userNames);
//		}
//		else {
//			Debug.Log("Leaderboard Not Found");
//		}
//	}
//	);
//}
//
//function LoadLeaderboardUsers (profiles : IUserProfile[] ) {
//	Debug.Log("There was " + profiles.Length + " profiles loaded");
//		
//}

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

}




