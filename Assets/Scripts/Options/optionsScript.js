#pragma strict

import UnityEngine.UI;

public var musicText : Text;
public var soundEffectsText : Text;
public var backText : Text;

var soundController : soundControllerScript;

function Start () {

	if (GameObject.Find("soundController")) {

		Debug.Log("Found it");
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);
		if (soundController.music) {
			musicText.text = "ON";
		} else {
			musicText.text = "OFF";
		}
			
	} else {
		Debug.Log("Didnt find it");
	}

}

function Update () {

}