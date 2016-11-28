#pragma strict
import UnityEngine.UI;

public class playerMovementScript extends MonoBehaviour {
	public var obstacles1: GameObject;
	public var obstacles2: GameObject;
	var obstacles : GameObject[];
	public var speedSlider : Slider;
	var gameSpeed : float;
	public var gameStartSpeed = 4.0;
	public var gameMaxSpeed = 6.0;
	public var speedUpRate = 0.25;
	public var lateralShift = 0.5;
	private var playerWidth = 0.015;
	public var isJumping : boolean;
	public var jumpDurationMax = 3.0;
	public var jumpDurationMin = 1.0;
	public var cam: Camera;
	var paused = true;
	var playerSprites : playerSpritesScript;
	var playerScale : playerScaleScript;
	var playerShadow: playerShadowScript;
//	var score : scoreScript;
	enum Status {Right, Left, Down, DownRight, DownLeft, Jumping, Wrecked}; 
	public var playerStatus : Status;
	public var speedPercent : float;
	public var downhill  : boolean;

	function Start () {
		gameSpeed = gameStartSpeed;	
		obstacles = [obstacles1, obstacles2];
		playerSprites = GetComponent(playerSpritesScript);
		playerScale = GetComponent(playerScaleScript);
		playerShadow = GameObject.Find("shadow").GetComponent(playerShadowScript);
//		score = GameObject.Find("score").GetComponent(scoreScript);
		isJumping = false;
		downhill = false;
		playerStatus = Status.Right;

	}

	function PlayerJump () {

		isJumping = true;

		GetComponent(BoxCollider2D).enabled = false;
		playerSprites.Jump();

		var jumpDuration = Mathf.Lerp(jumpDurationMin,jumpDurationMax, speedPercent );

		playerScale.CreateAniCurve( jumpDuration, speedPercent);
		playerShadow.CreateAniCurves( jumpDuration, speedPercent);
//		score.Jump(speedPercent);
//		Debug.Log("Jump Duration:" + jumpDuration);

		Invoke("PlayerLand", jumpDuration);


	}

	function PlayerLand () {
		isJumping = false;
		GetComponent(BoxCollider2D).enabled = true;
		playerSprites.Land();
		playerStatus = Status.Down;
		playerSprites.DirectionUpdate();	
	}

	function PlayerInput(viewPos : Vector3) {

		if (Input.GetKeyDown ( "down" ) || Input.GetKeyDown ( "d" )) {
			playerStatus = Status.Down;
			playerSprites.DirectionUpdate();
		}		

		if (Input.GetKeyDown ( "right" ) || Input.GetKeyDown ( "r" )){

			if (playerStatus != Status.Wrecked) {

				if ( playerStatus  == Status.Right && viewPos.x < 1 - playerWidth )
					transform.Translate(lateralShift, 0, 0);

				if ( playerStatus == Status.DownRight && isJumping == false){
					transform.Translate(0, 0, 0);
					playerStatus = Status.Right;

				}
				if ( playerStatus == Status.Down) 
					playerStatus = Status.DownRight;
				if ( playerStatus == Status.DownLeft)
					playerStatus = Status.Down;
				if ( playerStatus == Status.Left)
					playerStatus = Status.DownLeft;

				playerSprites.DirectionUpdate();

			}
		}

		if (Input.GetKeyDown ("left") || Input.GetKeyDown ( "f" )){

			if (playerStatus != Status.Wrecked) {

				if ( playerStatus == Status.Left && viewPos.x > playerWidth)

					transform.Translate(-lateralShift, 0, 0);
				if ( playerStatus == Status.DownLeft && isJumping == false){
					transform.Translate(0, 0, 0);
					playerStatus = Status.Left;
				}
				if (playerStatus == Status.Down ) 
					playerStatus = Status.DownLeft;
				if ( playerStatus == Status.DownRight )
					playerStatus = Status.Down;
				if ( playerStatus == Status.Right )
					playerStatus = Status.DownRight;

				playerSprites.DirectionUpdate();

			}
				
		}
	}

	function PlayerMovement( viewPos: Vector3) {

		if (playerStatus == Status.DownRight) {
				if (viewPos.x < 1 - playerWidth)
					transform.Translate(Time.deltaTime * gameSpeed/2, 0, 0);			
			}
		if ( playerStatus == Status.DownLeft ) {
				if (viewPos.x > playerWidth) 
					transform.Translate(-1 * Time.deltaTime * gameSpeed/2, 0, 0);
		}


	}

	function ObstacleMovement() {
		
		for (obs in obstacles){

			if ( downhill ) 
				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
			else
				obs.transform.Translate(0, 0, 0);	
		}
	}

	function PlayerSpeed () {
		if ( downhill ) { 
			if	(gameSpeed < gameMaxSpeed)
				gameSpeed += Time.deltaTime * speedUpRate;
		}
		else {
			gameSpeed = gameStartSpeed;
		}

		speedPercent = (gameSpeed - gameStartSpeed) / (gameMaxSpeed - gameStartSpeed);
		
	}

	function Update () {
//		Debug.Log(downhill);
		if (!paused) {

			if ( playerStatus == Status.Wrecked || playerStatus == Status.Left || playerStatus == Status.Right)
				downhill = false;
			
			else 
				downhill = true;

			PlayerSpeed();
			speedSlider.value = speedPercent;
			var viewPos = cam.WorldToViewportPoint(this.transform.position);
			PlayerInput(viewPos);
			PlayerMovement(viewPos);
			ObstacleMovement();

			if ( isJumping ) {
				var s = playerScale.anim.Evaluate(Time.time);
				this.transform.localScale = new Vector3(s,s,s);
			}
		} 
	}
}


















