#pragma strict

var chairs : GameObject[];
//var chair2 : GameObject;
//var chair3 : GameObject;
var chairEmpty : GameObject;
public var chairSpeed = 0.5;
private var chairStartPos = new Vector3();


function Start () {
//	chairStartPos  = chairs[0].transform.position.y;
	chairStartPos = chairs[0].transform.position;
}

function Update () {

//	for (var i = 0, i < chairs.count, i++)

	for (c in chairs) {

		if (c.transform.position.y >= 5.0) {
			c.transform.position = chairStartPos;
			
		}
		transform.Translate(0, Time.deltaTime * chairSpeed, 0);
	}

}