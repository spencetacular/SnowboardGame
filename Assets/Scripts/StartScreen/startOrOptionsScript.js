#pragma strict

import UnityEngine.UI;

var startMitten : Image;
var optionsMitten : Image;
var startText : RectTransform;
var optionsText : RectTransform;
var hiScoreText : RectTransform;

var playPressed = false;
var levelToLoad  = "";
var options = "OptionsScreen";
public var soundEffects : soundEffectsScript;
public var swipe : swipeScript;
public var myDevice : device;

var selectOptions = "down";
var selectStart = "up";

function Start () {
	myDevice = new device();
	levelToLoad = "SuperTopSecret";

	if (myDevice.mobile){
		levelToLoad = "Level01";
		selectOptions = "right";
		selectStart = "left";

		startText.anchoredPosition = new Vector2 (-150.0, 50.0);
		optionsText.anchoredPosition = new Vector2 (150.0, 50.0);	
		hiScoreText.anchoredPosition = new Vector2 (0.0, 230.0);	

	}
	optionsMitten.enabled = false;

}

function Update () {

	

	if (swipe.Swipe() == selectOptions) {
		if (startMitten.enabled) {
			startMitten.enabled = false;
			optionsMitten.enabled = true;
			soundEffects.Scroll();
		}
	}

			

	if (swipe.Swipe() == selectStart) {
		if (optionsMitten.enabled) {
			startMitten.enabled = true;
			optionsMitten.enabled = false;
			soundEffects.Scroll();
		}

	}

	if (swipe.Swipe() == "enter") {

			if (startMitten.enabled) {
				soundEffects.levelToLoad = levelToLoad;
				Debug.Log("Yep");
			}
			else
				soundEffects.levelToLoad = "OptionsScreen";

			soundEffects.Load();
		}

}





