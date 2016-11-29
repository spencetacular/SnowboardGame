#pragma strict

import UnityEngine.UI;

public var optionText : Text;
public var optionButtonOn : Image;
public var optionButtonOff : Image;
public var pointer : Image;

//public var soundEffectsText : Text;
//public var backText : Text;

//var soundController : soundControllerScript;

function Start () {
//
//	if (GameObject.Find("soundController")) {
//
//		Debug.Log("Found it");
//		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);
//		if (soundController.music) {
//			musicText.text = "ON";
//		} else {
//			musicText.text = "OFF";
//		}

//	On ();
//	Off ();

	pointer.enabled = false;
			
	
}

function Select ( isSelected : boolean) {
	pointer.enabled = isSelected;
}



function On () {
	if ( optionText && optionButtonOn ) {
		optionText.text = "ON";
		optionText.color = new Color(0.0, 0.8352941, 0.827451, 1.0);
		optionButtonOn.enabled = true;
		optionButtonOff.enabled = false;
	}

}

function Off () {
	if ( optionText && optionButtonOn ) {
		optionText.text = "OFF";
		optionText.color = new Color(0.9372549, 0.15686275, 0.48235294, 1.0);
		optionButtonOn.enabled = false;
		optionButtonOff.enabled = true;
	}

}

function Update () {

}