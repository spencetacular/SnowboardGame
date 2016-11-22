#pragma strict

function Start () {

}

function Update () {

	if (Input.GetKeyDown ( "right" ) || Input.GetKeyDown ( "r" )){
			
		}

	if (Input.GetKeyDown ("left") || Input.GetKeyDown ( "f" )){
		
			
	}

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") ) {

		GameObject.Find("levelManager").GetComponent(levelManagerScript).InstructionsMode();
		
	}

	


}