#pragma strict

import UnityEngine.UI;

public var musicOption : optionScript;
public var soundFXOption : optionScript;
public var backOption : optionScript;

public var selectedOption : optionScript;

var soundController : soundControllerScript;

public var soundEffects : soundEffectsScript;

function Start () {
	if (GameObject.Find("soundController")) {

		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);

//		if (soundController.music) {
//			musicOption.On();
//	
//		}
//		else 
//			musicOption.Off();

		if (soundController.soundFX)
			soundFXOption.On();
		else 
			soundFXOption.Off();
		
	}

	selectedOption = musicOption;
	selectedOption.Select(true);

	

}

function Update () {

	if (Input.GetKeyDown ("down") || Input.GetKeyDown ("d")) {


		if (selectedOption == soundFXOption) {
			selectedOption.Select(false);
			selectedOption = backOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
		}
		if (selectedOption == musicOption) {
			selectedOption.Select(false);
			selectedOption = soundFXOption;
			selectedOption.Select(true);
			soundEffects.Scroll();

		}


	}

	if (Input.GetKeyDown ("up") || Input.GetKeyDown ("g")) {

		if (selectedOption == soundFXOption) {
			selectedOption.Select(false);
			selectedOption = musicOption;
			selectedOption.Select(true);
			soundEffects.Scroll();
		}
		if (selectedOption == backOption) {
			selectedOption.Select(false);
			selectedOption = soundFXOption;
			selectedOption.Select(true);
			soundEffects.Scroll();

		}

	}

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") ) {

		selectedOption.Flip();
		soundEffects.Select();
	}

}