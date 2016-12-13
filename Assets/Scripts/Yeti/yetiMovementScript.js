#pragma strict


public var anim : Animator;
public var playerMovement : playerMovementScript;
public var player : GameObject;


private var speed : float;
private var chaseSpeed : float;
private var catchUpSpeed : float;
public var spawnPos = 7.0;

private var spawned = false;
private var chasing = false;
public var yetiWidth = 0.5;

public var spawnTime = 5.0;
public var paused = false;
public var caughtUp = false;

public var soundEffects : soundEffectsScript;

function Start () {

	
	chaseSpeed = playerMovement.gameStartSpeed * -1.0;
//	catchUpSpeed = playerMovement.gameMaxSpeed * -1.0;
	speed = catchUpSpeed;
	GetComponent(CircleCollider2D).enabled = false;
}

function Spawn () {

	if (!paused) {
		spawned = true;
		chasing = true;
		caughtUp = false;
		transform.position = new Vector3(player.transform.position.x, spawnPos, 0.0);
		GetComponent(CircleCollider2D).enabled = true;
		soundEffects.Roar();
	}
}

function SpawnDelay () {
	var time = spawnTime + Random.Range (-5, 10);
	Invoke ("Spawn", time);
}


function PlayerEscape(playerY : float, yetiY : float) {
	var distance = yetiY - playerY ;
//	Debug.Log(distance);
	if (distance >= spawnPos * 1.5) {
		spawned = false;
		chaseSpeed -= 0.5;	
		SpawnDelay ();
		GetComponent(CircleCollider2D).enabled = false;
		soundEffects.Groan();
	}
}

function CatchUp () {

	if (caughtUp == false) {
		if (transform.position.y > 2.5) {
			catchUpSpeed = playerMovement.gameSpeed * -1.1;
			speed = catchUpSpeed;
		} else {
			speed = chaseSpeed;
			caughtUp = true;
		}
	}
}

function OnTriggerEnter2D (other : Collider2D) { 
	if (other.tag == "Player" && other.GetComponent(playerInvulnerableScript).invulnerable == false)	 {
		other.GetComponent(playerLivesScript).LoseAllLives();
		var boy = GameObject.Find("levelManager").GetComponent(levelManagerScript).boyAvatar;
		player.GetComponent(SpriteRenderer).enabled = false;
		playerMovement.paused = true;
		playerMovement.downhill = false;
		player.transform.Find("shadow").GetComponent(SpriteRenderer).enabled = false;
		if (boy)
			anim.SetTrigger("eatBoy");
		else 
			anim.SetTrigger("eatGirl");
		chasing  = false;
	}

	
}

function Update () {

	

	if (spawned && chasing) {
//		Debug.Log(speed);
		CatchUp();
		PlayerEscape(player.transform.position.y, transform.position.y);

		var x = 0.0;
		var xDiff =  Mathf.Abs(player.transform.position.x - transform.position.x);
		if ( xDiff >= yetiWidth ) {
			var direction  =  -1 * Mathf.Sign(player.transform.position.x - transform.position.x);
			x = direction * speed;
		}

		if(playerMovement.downhill)
			transform.Translate(x * Time.deltaTime, Time.deltaTime * (playerMovement.gameSpeed + speed), 0);
		else
			transform.Translate(x * Time.deltaTime, Time.deltaTime * speed, 0);
		}




}