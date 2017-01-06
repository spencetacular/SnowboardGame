#pragma strict


//public var playerMovement : playerMovementScript;

function Start () {

}

function OnTriggerEnter2D (other : Collider2D) {
	if (other.tag == "Player") {
		other.GetComponent(playerMovementScript).atSide = true;
		Debug.Log("atSide");
	}
}

function OnTriggerExit2D (other : Collider2D) {
	if (other.tag == "Player") {
		other.GetComponent(playerMovementScript).atSide = false;
	}
}

function Update () {

}