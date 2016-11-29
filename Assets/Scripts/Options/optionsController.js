#pragma strict

import UnityEngine.UI;

public var musicOption : optionScript;
public var soundFXOption : optionScript;
public var backOption : optionScript;

public var selectedOption : optionScript;

var soundController : soundControllerScript;

function Start () {
	if (GameObject.Find("soundController")) {

		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);

		if (soundController.music)
			musicOption.On();
		else 
			musicOption.Off();

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
		}
		if (selectedOption == musicOption) {
			selectedOption.Select(false);
			selectedOption = soundFXOption;
			selectedOption.Select(true);

		}


	}

	if (Input.GetKeyDown ("up") || Input.GetKeyDown ("g")) {

		if (selectedOption == soundFXOption) {
			selectedOption.Select(false);
			selectedOption = musicOption;
			selectedOption.Select(true);
		}
		if (selectedOption == backOption) {
			selectedOption.Select(false);
			selectedOption = soundFXOption;
			selectedOption.Select(true);

		}

	}

}