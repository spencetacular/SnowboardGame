﻿#pragma strict


public var fade : GameObject;
public var player : GameObject;
public var liftChairsFull : GameObject;
public var liftChairsEmpty : GameObject;
public var canvasAvatar : GameObject;
public var canvasInstructions : GameObject;
public var canvasPlaying : GameObject;
//private var canvases : GameObject[];


function Start () {
	
//	fade.GetComponent(Animator).SetTrigger("fadeUp");
//	fade.GetComponent(Animator).SetTrigger("fadeOut");

//	player.SetActive(false);
	canvasInstructions.SetActive(false);
	canvasPlaying.SetActive(false);
	canvasAvatar.SetActive(true);


	
}

function AvatarMode () {
	
}

function InstructionsMode () {
	canvasAvatar.SetActive(false);
	canvasInstructions.SetActive(true);
	
}

function GameMode () {
	canvasPlaying.SetActive(true);
	canvasInstructions.SetActive(false);
	player.GetComponent(playerMovementScript).paused = false;
	liftChairsFull.GetComponent(liftChairsScript).paused = false;
	liftChairsEmpty.GetComponent(liftChairsScript).paused = false;
	fade.GetComponent(Animator).SetTrigger("fadeUp");
}

function GameOverMode () {
//	GetComponent(Canvas).enabled = true;
//	GameObject.Find("gamePlayingCanvas").GetComponent(Canvas).enabled = false;
//	GameObject.Find("player").GetComponent(playerMovementScript).paused = true;
//	GetComponent(AudioSource).Play();
//	var score = GameObject.Find("score").GetComponent(scoreScript).score;
//	GameObject.Find("finalScore").GetComponent(UnityEngine.UI.Text).text = "Final Score: " + score;
//	GameObject.Find("topScores").GetComponent(topScoresScript).GameOver();	

	fade.GetComponent(Animator).SetTrigger("fadeOut");
}

function Update () {

}