#pragma strict

import UnityEngine.UI;
var readyToRestart = false;

var pressStartTopPlay : Text;
//var startControls : GameObject;

function Start () {
	pressStartTopPlay.GetComponent(flashingTextScript).Hide();
//	startControls.SetActive(false);
}

function PressStartToPlay() {
	pressStartTopPlay.GetComponent(flashingTextScript).Flash();
	pressStartTopPlay.GetComponent(flashingTextScript).Flashing(true);
	readyToRestart = true;
//	restartText.SetActive(true);
//	startControls.SetActive(true);
}


function Update () {

	if (readyToRestart) {

		if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2"))
			Application.LoadLevel("StartScreen");

		
	}

}