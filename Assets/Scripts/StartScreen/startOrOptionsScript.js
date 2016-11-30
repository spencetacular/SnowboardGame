#pragma strict

import UnityEngine.UI;

var startImage : Image;
var optionsImage : Image;

var playPressed = false;
public var level1  = "Level01";
public var options = "OptionsScreen";
public var soundEffects : soundEffectsScript;

function Start () {

	optionsImage.enabled = false;

}

function Update () {

	if (Input.GetKeyDown ("down") || Input.GetKeyDown ("d")) {
		if (startImage.enabled) {
			startImage.enabled = false;
			optionsImage.enabled = true;
			soundEffects.Scroll();
		}
	}

			

	if (Input.GetKeyDown ("up") || Input.GetKeyDown ("g")) {
		if (optionsImage.enabled) {
			startImage.enabled = true;
			optionsImage.enabled = false;
			soundEffects.Scroll();
		}

	}

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") ) {

		if (!playPressed) {
//			GetComponent(AudioSource).Play();
			playPressed = true;

			if (startImage.enabled)
				Application.LoadLevel(level1);
			else
				Application.LoadLevel(options);
		}

	}

//	if (playPressed == true && GetComponent(AudioSource).isPlaying == false)
//		Destroy(this);	

}



