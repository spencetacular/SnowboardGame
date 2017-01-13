//#pragma strict
//import UnityEngine.SocialPlatforms;
//
//function Start () {
//
//	// Authenticate and register a ProcessAuthentication callback
//    // This call needs to be made before we can proceed to other calls in the Social API
//    Social.localUser.Authenticate (ProcessAuthentication);
//
////	var leaderboard: ILeaderboard = Social.CreateLeaderboard();
////		leaderboard.id = "Leaderboard012";
////		leaderboard.LoadScores(function(result) {
////			Debug.Log("Received " + leaderboard.scores.Length + " scores");
////			for (var score: IScore in leaderboard.scores)
////				Debug.Log(score);
////		}
////		);
//
//}
//
//// This function gets called when Authenticate completes
//// Note that if the operation is successful, Social.localUser will contain data from the server. 
//function ProcessAuthentication (success: boolean) {
//    if (success) {
//        Debug.Log ("Authenticated, checking achievements");
//
//    	var leaderboard: ILeaderboard = Social.CreateLeaderboard();
//		leaderboard.id = "top10Scores";
//		Debug.Log(leaderboard.maxRange);
//		leaderboard.LoadScores(function(result) {
//			Debug.Log("Received " + leaderboard.scores.Length + " scores");
//			for (var score: IScore in leaderboard.scores)
//				Debug.Log(score);
//		}
//		);
//
//		AddScore ();
//
//
//        // Request loaded achievements, and register a callback for processing them
////        Social.LoadAchievements (ProcessLoadedAchievements);
//    }
//    else
//        Debug.Log ("Failed to authenticate");
//}
//
//function AddScore () {
//	Social.ShowLeaderboardUI();
//	Social.ReportScore(999, "top10Scores", ProcessAddedScore);
//	
//}
//
//function ProcessAddedScore(sucess: boolean) {
//	if (sucess) {
//		Debug.Log("New Score Added"); 
//	} else {
//		Debug.Log("No Score Added"); 
//	}
//	
//}
//
//// This function gets called when the LoadAchievement call completes
//function ProcessLoadedAchievements (achievements: IAchievement[]) {
//    if (achievements.Length == 0)
//        Debug.Log ("Error: no achievements found");
//    else
//        Debug.Log ("Got " + achievements.Length + " achievements");
//    
//    // You can also call into the functions like this
//    Social.ReportProgress ("Achievement01", 100.0, function(result) {
//        if (result)
//            Debug.Log ("Successfully reported achievement progress");
//        else
//            Debug.Log ("Failed to report achievement");
//    });
//}
//
//function Update () {
//
//}