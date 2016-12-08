#pragma strict

private var speed : float;
public var anim : Animator;
public var playerMovement : playerMovementScript;
private var running = false;
private var spawned = false;
public var spwanTime = 5.0;
public var bonusAmount: int;
public var soundEffects : soundEffectsScript;
public var score : scoreScript;

function Start () {

	speed = playerMovement.gameStartSpeed * -1.0;

}

function RoosterRun( playerY : float, roosterY : float) {

	var distanceY = Math.Abs(playerY - roosterY);
	Debug.Log(distanceY);

	if (running == false){
		if (distanceY <= 2.5) {
			running = true;
			anim.SetTrigger("run"); 
		}
	}
}

function Spawn () {
	this.GetComponent(SpriteRenderer).enabled = true;
	this.GetComponent(CircleCollider2D).enabled = true;
	var x = Random.Range(-5.0, 5.0);
	var y = -10.0;
	transform.position = new Vector3( x ,y , 0 );
	spawned = true;
	running = false;
	soundEffects.RoosterCrow();
	
}

function SpawnDelay () {
//	var time = spawnTime + Random.Range ()
	Invoke ("Spawn", spwanTime);
	
}

function Catch () {
	score.Bonus(bonusAmount);
	this.GetComponent(SpriteRenderer).enabled = false;
	this.GetComponent(CircleCollider2D).enabled = false;

}

function Update () {


	if (spawned) {
		RoosterRun( playerMovement.transform.position.y, transform.position.y );
		var currentSpeed = 0.0;

		if (running) 
			currentSpeed = speed;
			


		if ( playerMovement.downhill ) 
				transform.Translate(0, Time.deltaTime * (playerMovement.gameSpeed + currentSpeed), 0);
		else
			transform.Translate(0,  Time.deltaTime * currentSpeed, 0);	

	}



	

}