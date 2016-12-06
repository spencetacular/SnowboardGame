#pragma strict


public var anim : Animator;
public var playerMovement : playerMovementScript;
public var player : GameObject;


private var speed : float;
public var spawnPos = 7.0;

private var spawned = false;
private var chasing = false;
public var yetiWidth = 0.5;

public var spwanTime = 1.0;


public var soundEffects : soundEffectsScript;

function Start () {

	speed = playerMovement.gameStartSpeed * -1.0;
}

function Spawn () {
	spawned = true;
	chasing = true;
	transform.position = new Vector3(player.transform.position.x, spawnPos, 0.0);
	soundEffects.Roar();
}

function SpawnDelay () {
	Invoke ("Spawn", spwanTime);
}


function PlayerEscape(playerY : float, yetiY : float) {
	var distance = yetiY - playerY ;
//	Debug.Log(distance);
	if (distance >= spawnPos * 2) {
		spawned = false;
		speed += 0.5;
		SpawnDelay ();
		soundEffects.Select();
	}
}

function OnTriggerEnter2D (other : Collider2D) { 
	if (other.tag == "Player")	 {
		other.GetComponent(playerLivesScript).LoseAllLives();
		var boy = GameObject.Find("levelManager").GetComponent(levelManagerScript).boyAvatar;
		player.GetComponent(SpriteRenderer).enabled = false;
		playerMovement.paused = true;
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