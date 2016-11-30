#pragma strict

import UnityEngine.UI;

public var optionText : Text;
public var optionButtonOn : Image;
public var optionButtonOff : Image;
public var pointer : Image;

private var isOn : boolean;

public var isMusic : boolean;
public var isSoundFX : boolean;
public var isBack : boolean;

//public var soundEffectsText : Text;
//public var backText : Text;

var soundController : soundControllerScript;
public var soundEffects : soundEffectsScript;

function Awake () {
	if (GameObject.Find("soundController")) {
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);
//		Debug.Log("found it");
	}



}

function Start () {

//	if (GameObject.Find("soundController")) {
//		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);
//		Debug.Log("found it");
//	}


	pointer.enabled = false;
			
	
}

function Select ( isSelected : boolean) {
	pointer.enabled = isSelected;
	Debug.Log("selected called");
}

function Flip () {

	if (isBack)
		Application.LoadLevel("StartScreen");
	if (isOn) 
		Off();
	else
		On();
}



function  GUIOn () {
	if ( isMusic || isSoundFX ) {
		optionText.text = "ON";
		optionText.color = new Color(0.0, 0.8352941, 0.827451, 1.0);
		optionButtonOn.enabled = true;
		optionButtonOff.enabled = false;
		isOn = true;

		Debug.Log("On Called");

	}

}

function On () {
	if (isSoundFX) {
			soundController.soundFX = true;
			soundEffects.Mute(false);
		} 
	if (isMusic) {
		soundController.music = true;
		soundController.GetComponent(AudioSource).Play();
	} 

//	isOn = true;
	GUIOn ();
	
}

function GUIOff () {
	if ( isMusic || isSoundFX ) {
		optionText.text = "OFF";
		optionText.color = new Color(0.9372549, 0.15686275, 0.48235294, 1.0);
		optionButtonOn.enabled = false;
		optionButtonOff.enabled = true;
		isOn = false;

		Debug.Log("Off Called");

	}

}

function Off () {
	if (isSoundFX) {
			soundController.soundFX = false;
			soundEffects.Mute(true);
	} 
	if (isMusic) {
		soundController.music = false;
		soundController.GetComponent(AudioSource).Stop();
	} 


	GUIOff ();
	
}

function Update () {

}