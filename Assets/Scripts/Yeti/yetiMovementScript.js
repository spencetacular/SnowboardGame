#pragma strict


public var anim : Animator;
public var playerMovement : playerMovementScript;
public var player : GameObject;


public var speed : float;
public var spawnPos = 7.0;

private var spawned = false;
private var chasing = false;
public var yetiWidth = 0.5;

function Start () {
}

function Spawn () {
	spawned = true;
	chasing = true;
	transform.position = new Vector3(player.transform.position.x, spawnPos, 0.0);
}

function SpawnDelay () {
	Invoke ("Spawn", 15);
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