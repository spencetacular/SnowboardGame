#pragma strict

public var playerMovement : playerMovementScript;
public var player : GameObject;

public var speed : float;
public var spawnPos = 7.0;

private var spawned = false;
public var yetiWidth = 0.5;

function Start () {
//	Spawn();
}

function Spawn () {
	spawned = true;
	transform.position = new Vector3(player.transform.position.x, spawnPos, 0.0);
}

function Update () {

//	this.transform.position  = new Vector2(player.transform.position.x)

	if (spawned) {
//		transform.position = new Vector3 (player.transform.position.x, transform.position.y, 0);
		var x = 0.0;
		var xDiff =  Mathf.Abs(player.transform.position.x - transform.position.x);
		if ( xDiff >= yetiWidth ) {
			var direction  =  -1 * Mathf.Sign(player.transform.position.x - transform.position.x);
			x = direction * speed;
		}
//		Debug.Log(direction);
		Debug.Log("X: " +  x);
		Debug.Log("diff: " + xDiff);



		if(playerMovement.downhill)
			transform.Translate(x * Time.deltaTime, Time.deltaTime * (playerMovement.gameSpeed + speed), 0);
		else
			transform.Translate(x * Time.deltaTime, Time.deltaTime * speed, 0);
		}
		

//		if(playerMovement.downhill)
//			transform.Translate(x * Time.deltaTime, 0 , 0);
//		else
//			transform.Translate(x * Time.deltaTime, 0, 0);
//		}

}