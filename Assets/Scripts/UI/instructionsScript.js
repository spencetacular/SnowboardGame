#pragma strict

var soundEffects : soundEffectsScript;

function Start () {

}

function Update () {

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") ) {

			GameObject.Find("levelManager").GetComponent(levelManagerScript).GameMode();
			soundEffects.Select();
			
	}

}