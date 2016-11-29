#pragma strict

import UnityEngine.UI;

public var musicBool : Text;
public var soundEffectsBool : Text;

var soundController : soundControllerScript;

function Start () {

	if (GameObject.Find("soundController")) {
		Debug.Log("Found it");
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);
	} else {
		Debug.Log("Didnt find it");
	}

}

function Update () {

}