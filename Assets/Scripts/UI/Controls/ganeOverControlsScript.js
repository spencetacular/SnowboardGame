#pragma strict

import UnityEngine.UI;

var readyToRestart = false;
var pressStartTopPlay : Text;
var soundEffects : soundEffectsScript;
public var swipe : swipeScript;


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
		
		if (swipe.Swipe() == "enter") {
			soundEffects.levelToLoad = "StartScreen";
			soundEffects.Load();
		}
	}
}