#pragma strict

var lives : UnityEngine.UI.Image[];
@HideInInspector
var numLives: int;
@HideInInspector
var livesLeft : int;

function Start () {
	numLives = lives.length;
	livesLeft = numLives;

}

function LoseALife () {
	livesLeft--;

	if (livesLeft > 0) 
		lives[livesLeft].GetComponent(UnityEngine.UI.Image).enabled = false;

	else 
		Invoke("GameOver", 0);
}

function GameOver () {
	GameObject.Find("gameOverCanvas").GetComponent(GameOverScript).GameOver();
}

function Update () {

}