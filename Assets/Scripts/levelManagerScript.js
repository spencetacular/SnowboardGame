﻿#pragma strict

public var fade : GameObject;
public var player : GameObject;
public var liftChairsFull : GameObject;
public var liftChairsEmpty : GameObject;
public var canvasAvatar : GameObject;
public var canvasControls : GameObject;
public var canvasBlackBox : GameObject;
public var canvasInstructions : GameObject;
public var canvasFingerGestures : GameObject;
public var canvasPlaying : GameObject;
public var canvasGameOver : GameObject;
public var canvasGameOverMobile : GameObject;
public var boyAvatar : boolean;
public var boyPanel : GameObject;
public var girlPanel : GameObject;
public var yetiMovement : yetiMovementScript;
public var roosterMovement : roosterMovementScript;
public var playerLives : playerLivesScript;
public var time : timeScript;
public var topScores : topScoresScript;
public var score : scoreScript;
public var socialLeaderboard : socialLeaderboardScriptJS;
var myDevice : device;

function Start () {

	myDevice = new device();

	canvasPlaying.SetActive(false);
	canvasGameOver.SetActive(false);
	canvasGameOverMobile.SetActive(false);
	canvasAvatar.SetActive(false);
	canvasControls.SetActive(false);
	canvasFingerGestures.SetActive(false);
//	canvasInstructions.SetActive(true);
	InstructionsMode();
//	canvasBlackBox.SetActive(true);

}

function InstructionsMode () {
	
	canvasInstructions.SetActive(true);
	canvasInstructions.GetComponent(instructionsScript).swipe.instructionsControls = true;
	
}

function fingerGuesturesMode () {
	
	canvasInstructions.SetActive(false);
	canvasFingerGestures.SetActive(true);
	canvasFingerGestures.GetComponent(fingerGesturesScript).swipe.instructionsControls = true;
}

function AvatarMode () {
	canvasInstructions.SetActive(false);
	canvasFingerGestures.SetActive(false);
	canvasControls.SetActive(true);
	canvasAvatar.SetActive(true);
}


function GameMode () {
	canvasControls.SetActive(false);
	canvasAvatar.SetActive(false);
	canvasPlaying.SetActive(true);
	GameObject.Find("avatar").GetComponent(avatarGame).SetAvatar(boyAvatar);
	GameObject.Find("obstacles1").GetComponent(obstacleGeneratorScript).InitialSpawn();
	GameObject.Find("obstacles2").GetComponent(obstacleGeneratorScript).InitialSpawn();
	player.GetComponent(playerMovementScript).swipe.gamePlayControls = true;
	playerLives.SetLives(boyAvatar);
	if (boyAvatar)
		girlPanel.active = false;
	else
		boyPanel.active = false;
	player.GetComponent(playerSpritesScript).SetPlayerSprites(boyAvatar);
	GameObject.Find("speachBubble").GetComponent(speachBubbleScript).StartComment();
	yetiMovement.SpawnDelay();
	roosterMovement.DeSpawn();
	player.GetComponent(playerMovementScript).paused = false;
	liftChairsFull.GetComponent(liftChairsScript).paused = false;
	liftChairsEmpty.GetComponent(liftChairsScript).paused = false;
	fade.GetComponent(Animator).SetTrigger("fadeUp");
	time.StartClock();

}

function GameOverMode () {
	GameObject.Find("LiftChairsFull").GetComponent(liftChairsScript).paused = true;
	GameObject.Find("LiftChairsEmpty").GetComponent(liftChairsScript).paused = true;
	player.GetComponent(playerMovementScript).swipe.gamePlayControls = false;
	player.GetComponent(playerMovementScript).paused = true;
	fade.GetComponent(Animator).SetTrigger("fadeOut");


	Invoke("TopScoresMode", 2);

	if (!myDevice.mobile) {
		Invoke ("LoadStartScreen", 300);
	}

	if (!myDevice.mobile) {
		Invoke("TopScoresMode", 2);
		Invoke ("LoadStartScreen", 300);
	} else {
		Invoke("TopScoresMobileMode", 2);
	}

}

function TopScoresMode () {

	canvasGameOver.SetActive(true);	
	yetiMovement.paused = true;
	roosterMovement.paused = true;

//	player.GetComponent(playerMovementScript).swipe.gamePlayControls = true;
//	canvasGameOver.GetComponent(ganeOverControlsScript).swipe.gameOverControls = true;
//	var score = GameObject.Find("score").GetComponent(scoreScript).score;
	canvasPlaying.SetActive(false);
	topScores.score = score.score;
	topScores.GameOver(score.score);

	var soundController : soundControllerScript;

	if (GameObject.Find("soundController")) {
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);

			if (soundController) {
				if (soundController.music) {
					soundController.leaderBoardMusic.Play();
					soundController.backgroundMusic.Stop();
			}
		}
	}

//	DEVELOPMENT **********************************
//	topScores.LogScore(score.score, time.totalSeconds);
//	PlayerPrefs.SetInt("Yeti", 0);
}

function LoadStartScreen () {
	Application.LoadLevel("StartScreen");
}

function TopScoresMobileMode() {
	canvasGameOverMobile.SetActive(true);	
	yetiMovement.paused = true;
	roosterMovement.paused = true;
	canvasPlaying.SetActive(false);

	var soundController : soundControllerScript;

	if (GameObject.Find("soundController")) {
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);

			if (soundController) {
				if (soundController.music) {
					soundController.leaderBoardMusic.Play();
					soundController.backgroundMusic.Stop();
			}
		}
	}
	GameObject.Find("finalScoreMobile").GetComponent(UnityEngine.UI.Text).text = score.score.ToString();

	socialLeaderboard.ReportScore(score.score);
	socialLeaderboard.LoadLeaderboard();


}

function Update () {

}