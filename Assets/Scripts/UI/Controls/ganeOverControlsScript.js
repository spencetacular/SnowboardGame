#pragma strict

import UnityEngine.UI;

var readyToRestart = false;
var pressStartTopPlay : Text;
var soundEffects : soundEffectsScript;
public var swipe : swipeScript;
var myDevice : device;

function Start () {
	myDevice = new device();
	pressStartTopPlay.GetComponent(flashingTextScript).Hide();
}

function PressStartToPlay() {

	pressStartTopPlay.GetComponent(flashingTextScript).Flash();
	pressStartTopPlay.GetComponent(flashingTextScript).Flashing(true);
	readyToRestart = true;
	swipe.instructionsControls = true;
}

function Update () {

	if (readyToRestart) {
		
		if (swipe.Swipe() == "enter") {
			if (!myDevice.mobile) {
				soundEffects.levelToLoad = "StartScreen";
				soundEffects.Load();

			} else {
			 	GameObject.Find("levelManager").GetComponent(levelManagerScript).LeaderboardMobileMode();
			 	soundEffects.Select();
			}

		}
	}
}