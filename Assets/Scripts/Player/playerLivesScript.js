#pragma strict

import UnityEngine.UI;

var boyLives : Image[];
var girlLives : Image[];
var lives : Image[];
@HideInInspector
var numLives: int;
@HideInInspector
var livesLeft : int;

function Start () {
	numLives = lives.length;
	livesLeft = numLives;
	lives = boyLives;

}

function SetLives( boy : boolean) {
	if (boy)
		lives = boyLives;
	else
		lives = girlLives;
}

function AddALife () {
	if (livesLeft < numLives) {
		
		lives[livesLeft].GetComponent(UnityEngine.UI.Image).enabled = true;
		livesLeft++;
	}
}

function LoseALife () {
	livesLeft--;

	if (livesLeft > 0) 
		lives[livesLeft].GetComponent(UnityEngine.UI.Image).enabled = false;

	else 
		Invoke("GameOver", 0);
}

function LoseAllLives () {
	for ( l in lives ) 
		l.GetComponent(UnityEngine.UI.Image).enabled = false;

	Invoke("GameOver", 5);
}

function GameOver () {
	GameObject.Find("levelManager").GetComponent(levelManagerScript).GameOverMode();
}

function Update () {

}