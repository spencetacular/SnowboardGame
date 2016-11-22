#pragma strict

var restartText : GameObject;
var startControls : GameObject;

function Start () {
	restartText.SetActive(false);
	startControls.SetActive(false);
}

function GameOver () {
	GetComponent(Canvas).enabled = true;
	GameObject.Find("gamePlayingCanvas").GetComponent(Canvas).enabled = false;
	GameObject.Find("player").GetComponent(playerMovementScript).paused = true;
	GetComponent(AudioSource).Play();
	var score = GameObject.Find("score").GetComponent(scoreScript).score;
	GameObject.Find("finalScore").GetComponent(UnityEngine.UI.Text).text = "Final Score: " + score;
	GameObject.Find("topScores").GetComponent(topScoresScript).GameOver();	
}

function PressStartToPlay() {
	restartText.SetActive(true);
	startControls.SetActive(true);
}



function Update () {

}