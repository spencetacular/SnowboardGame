#pragma strict

import UnityEngine.UI;

var startImage : Image;
var optionsImage : Image;

var playPressed = false;
public var level1  = "Level01";
public var options = "OptionsScreen";
public var soundEffects : soundEffectsScript;
public var swipe : swipeScript;

function Start () {

	optionsImage.enabled = false;

}

function Update () {

	if (swipe.Swipe() == "down") {
		if (startImage.enabled) {
			startImage.enabled = false;
			optionsImage.enabled = true;
			soundEffects.Scroll();
		}
	}

			

	if (swipe.Swipe() == "up") {
		if (optionsImage.enabled) {
			startImage.enabled = true;
			optionsImage.enabled = false;
			soundEffects.Scroll();
		}

	}

	if (swipe.Swipe() == "enter") {

			if (startImage.enabled)
				soundEffects.levelToLoad = level1;
			else
				soundEffects.levelToLoad = options;

			soundEffects.Load();
		}

}





