#pragma strict

var lives : UnityEngine.UI.Image[];
@HideInInspector
var numLives: int;
@HideInInspector
var livesLeft : int;

function Start () {
	livesLeft = lives.length;

}

function LoseALife () {
	livesLeft--;

	if (livesLeft > 0) 
		lives[livesLeft].GetComponent(UnityEngine.UI.Image).enabled = false;

	else 
		Invoke("GameOver", 0);
}

function GameOver () {
	Debug.Log("Called");
//	GameObject.Find("gameOverCanvas").GetComponent(GameOverScript).GameOver();
	GameObject.Find("levelManager").GetComponent(levelManagerScript).GameOverMode();
}

function Update () {

}