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
	private var screenWidth = 6.0;
	public var isJumping : boolean;
	public var jumpDurationMax = 3.0;
	public var jumpDurationMin = 1.0;
	public var cam: Camera;
	@HideInInspector
	var paused = true;
	var playerSprites : playerSpritesScript;
	var playerScale : playerScaleScript;
	var playerShadow: playerShadowScript;
	enum Status {Right, Left, Down, DownRight, DownLeft, Jumping, Wrecked}; 
	public var playerStatus : Status;
	public var speedPercent : float;
	public var downhill  : boolean;
	public var score : scoreScript;
	public var swipe : swipeScript;

	function Start () {

		gameSpeed = gameStartSpeed;	
		obstacles = [obstacles1, obstacles2];
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
		score.Jump(speedPercent);
		Invoke("PlayerLand", jumpDuration);
	}

	function PlayerLand () {
		isJumping = false;
		GetComponent(BoxCollider2D).enabled = true;
		playerSprites.Land();
		playerStatus = Status.Down;
		playerSprites.DirectionUpdate();	
	}

	function Shift (maxShift : float) {
		var shiftAmount = maxShift;

		if (Mathf.Abs(transform.position.x) + maxShift > screenWidth) {
			Debug.Log("too big");
			shiftAmount = screenWidth - Mathf.Abs(transform.position.x);
			Debug.Log(shiftAmount);
		}
		return shiftAmount;
	}

	function PlayerInput(viewPos : Vector3) {

		if (swipe.Swipe() == "down") {

			if (playerStatus == Status.Wrecked)
				 GetComponent(playerInvulnerableScript).Invulnerable();
			playerStatus = Status.Down;
			playerSprites.DirectionUpdate();
		}		

		if (swipe.Swipe() == "right") {

			if (playerStatus != Status.Wrecked) {

				if ( playerStatus  == Status.Right && transform.position.x < screenWidth )
					transform.Translate(Shift(lateralShift), 0, 0);
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

		if (swipe.Swipe() == "left") {

			if (playerStatus != Status.Wrecked) {

				if ( playerStatus == Status.Left && transform.position.x > screenWidth * -1.0 )
					transform.Translate(-1.0 * Shift(lateralShift), 0, 0);
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

		if (playerStatus == Status.DownRight && transform.position.x < screenWidth)
			transform.Translate(Time.deltaTime * gameSpeed/2, 0, 0);	
			
		if (playerStatus == Status.DownLeft  && transform.position.x > screenWidth * -1.0) 
			transform.Translate(-1 * Time.deltaTime * gameSpeed/2, 0, 0);
	}

	function ObstacleMovement() {
		
		for (obs in obstacles){

			if ( downhill ) 
				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
			
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
//		Debug.Log("PlayerPaused: " + paused);
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


















