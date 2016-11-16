#pragma strict

var chairs : GameObject[];
//var chair2 : GameObject;
//var chair3 : GameObject;
var chairEmpty : GameObject;
public var chairSpeed = 0.5;
private var chairStartPos = new Vector3();
private var chairEmptyStartPos  = new Vector3();
var playerMovement : playerMovementScript;


function Start () {
//	chairStartPos  = chairs[0].transform.position.y;
	chairStartPos = chairs[chairs.length -1].transform.position;
	chairEmptyStartPos = chairEmpty.transform.position;
	playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
}

function ChairsMovement() {
		
		for (c in chairs){

			if ( playerMovement.downhill ) 
				c.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed + Time.deltaTime  * chairSpeed, 0);
			else
				c.transform.Translate(0, Time.deltaTime  * chairSpeed, 0);

			if (c.transform.position.y >= 5.0) 
			c.transform.position = chairStartPos;
			

		}


	}

function ChairEmptyMovement () {
	if ( playerMovement.downhill ) 
		chairEmpty.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed - Time.deltaTime  * chairSpeed, 0);
	else
		chairEmpty.transform.Translate(0, -1 * Time.deltaTime  * chairSpeed, 0);

	if (chairEmpty.transform.position.y <= -5.0) 
		chairEmpty.transform.position = chairEmptyStartPos;
	

}

function Update () {
	ChairsMovement();
	ChairEmptyMovement();

//	for (var i = 0, i < chairs.count, i++)

//	for (c in chairs) {
//
//		if (c.transform.position.y >= 5.0) {
//			c.transform.position = chairStartPos;
//			
//		}
////		transform.Translate(0, Time.deltaTime * chairSpeed, 0);
//	}

}