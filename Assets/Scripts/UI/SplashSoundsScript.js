#pragma strict

public var soundEffects : soundEffectsScript;
var soundController : soundControllerScript;

function Start () {
	if (GameObject.Find("soundController"))
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);
}

function Whoosh () {
	if (soundController && soundController.soundFX)
		soundEffects.Whoosh();
}

function WhooshNoClick () {
	if (soundController && soundController.soundFX)
		soundEffects.WhooshNoClick();
}

function Shine () {
	if (soundController && soundController.soundFX)
		soundEffects.Shine();
}


