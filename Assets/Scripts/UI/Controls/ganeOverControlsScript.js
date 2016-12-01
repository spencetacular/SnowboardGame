#pragma strict

import UnityEngine.UI;

var readyToRestart = false;
var pressStartTopPlay : Text;
var soundEffects : soundEffectsScript;

function Start () {
	pressStartTopPlay.GetComponent(flashingTextScript).Hide();
}

function PressStartToPlay() {
	pressStartTopPlay.GetComponent(flashingTextScript).Flash();
	pressStartTopPlay.GetComponent(flashingTextScript).Flashing(true);
	readyToRestart = true;
}

function Update () {

	if (readyToRestart) {

		if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2"))
			soundEffects.levelToLoad = "StartScreen";
			soundEffects.Load();
	}
}