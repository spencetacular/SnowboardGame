﻿#pragma strict

import UnityEngine.UI;

public var musicOption : optionScript;
public var soundFXOption : optionScript;
public var backOption : optionScript;
public var selectedOption : optionScript;
var soundController : soundControllerScript;
public var soundEffects : soundEffectsScript;
public var swipe : swipeScript;
public var myDevice : device;

var selectNext = "down";
var selectPrevious = "up";

function Awake () {

	myDevice = new device();

	if (myDevice.mobile) {
		selectNext = "right";
		selectPrevious = "left";
	}
		
	if (GameObject.Find("soundController")) 
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);
	
}

function Start () {

	selectedOption = musicOption;
	selectedOption.Select(true);

	if (soundController) {

		if (soundController.music) 
			musicOption.GUIOn();
		else 
			musicOption.GUIOff();

		if (soundController.soundFX)
			soundFXOption.On();
		else 
			soundFXOption.Off();

	}
}

function Update () {

	if (swipe.Swipe() == selectNext) {

		if (selectedOption == backOption) {
			selectedOption.Select(false);
			selectedOption = musicOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
			return;

		}
		if (selectedOption == soundFXOption) {
			selectedOption.Select(false);
			selectedOption = backOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
			return;
		}
		if (selectedOption == musicOption) {
			selectedOption.Select(false);
			selectedOption = soundFXOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
			return;

		}
	}

	if (swipe.Swipe() == selectPrevious) {

		selectedOption.Select(false);

		if (selectedOption == soundFXOption) {
			selectedOption = musicOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
			return;
		}
		if (selectedOption == backOption) {
			selectedOption = soundFXOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
			return;
		}
		if (selectedOption == musicOption) {
			selectedOption = backOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
			return;
		}
	}

	if (swipe.Swipe() == "enter") {
		selectedOption.Flip();
		soundEffects.Select();
	}

}