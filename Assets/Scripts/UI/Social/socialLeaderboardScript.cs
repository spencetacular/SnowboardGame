﻿using UnityEngine;
using System.Collections;
using UnityEngine.SocialPlatforms;
using UnityEngine.UI;



public class socialLeaderboardScript : MonoBehaviour {

//	public Text scores;
//	public Text users;
//	public Text score;
//
//	void Start () {
//
//		Social.localUser.Authenticate (ProcessAuthentication);
//	}
//
//	void SetScore (int s) {
//		score.text = s.ToString();
//	}
//
//	// This function gets called when Authenticate completes
//	// Note that if the operation is successful, Social.localUser will contain data from the server. 
//	void ProcessAuthentication (bool success) {
//		if (success) {
//			Debug.Log ("Authentication successful");
//			string userInfo = "Username: " + Social.localUser.userName + 
//				"\nUser ID: " + Social.localUser.id + 
//				"\nIsUnderage: " + Social.localUser.underage;
//			Debug.Log (userInfo);
//			//			ReportScore (9999, "leadboard10");
//			LoadLeaderboard ();
//		}
//		else
//			Debug.Log ("Authentication failed");
//
//
//	}
//
//	void ReportScore (long score, string leaderboardID) {
//		Debug.Log ("Reporting score " + score + " on leaderboard " + leaderboardID);
//		Social.ReportScore (score, leaderboardID, success => {
//			Debug.Log(success ? "Reported score successfully" : "Failed to report score");
//		});
//	}
//
//	//	void NewScore (string userID, long score, string leaderboardID ) {
//	//		IScore s = Social.IScore;
//	//	}
//
//	void LoadLeaderboard () {
//		ILeaderboard leaderboard = Social.CreateLeaderboard();
//		leaderboard.id = "TopScores01";
//		//		ReportScore (9999, "Leaderboard012");
//		Social.ReportScore (99, leaderboard.id, success => {
//			Debug.Log(success ? "Reported score successfully" : "Failed to report score");
//		});
//		leaderboard.LoadScores(result =>
//			{
//				Debug.Log("Received " + leaderboard.scores.Length + " scores");
//				foreach (IScore score in leaderboard.scores) {
//					Debug.Log("Score: " + score);
//					scores.text += score + "\n";
//					users.text += score.userID + "\n";
//				}
//
//			});
//	}


}

