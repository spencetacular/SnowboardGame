#pragma strict

var soundEffects : soundEffectsScript;

function Update () {

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") ) {

			GameObject.Find("levelManager").GetComponent(levelManagerScript).GameMode();
			soundEffects.Select();
			
	}
}