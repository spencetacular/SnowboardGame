#pragma strict

var chairs : GameObject[];
public var chairSpeed = 0.5;
private var chairStartPos = new Vector3();
var playerMovement : playerMovementScript;
public var empty : boolean;
private var  direction : float;
private var screenHeight = 5.0;
public var paused = true;


function Start () {
	chairStartPos = chairs[chairs.length -1].transform.position;
	playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
	direction = empty ? -1 : 1;
		
}

function ChairsMovement() {
		
		for (c in chairs){

			if ( playerMovement.downhill ) 
				c.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed + (Time.deltaTime  * chairSpeed * direction), 0);
			else
				c.transform.Translate(0, Time.deltaTime  * chairSpeed * direction, 0);


			if (c.transform.position.y >= screenHeight) 
				c.transform.position = chairStartPos;
		}

	}


function Update () {
	if (!paused)
		ChairsMovement();

}