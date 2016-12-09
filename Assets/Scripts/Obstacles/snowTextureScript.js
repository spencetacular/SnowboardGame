#pragma strict

var screenHeight = 5.0;
var screenWidth = 6.0;

public var playerMovement : playerMovementScript;

function Start () {

}

function Spawn () {
	transform.position = new Vector3(Random.Range(screenWidth * -1.0, screenWidth), (screenHeight * - 1.0) - 1.0, 0 );
}

function Update () {
	if (transform.position.y > screenHeight) {
		Spawn ();	
	}

	if ( playerMovement.downhill ) 
		transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed, 0);


}