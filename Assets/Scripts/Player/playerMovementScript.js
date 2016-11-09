#pragma strict
public class playerMovementScript extends MonoBehaviour {
	public var obstacles1: GameObject;
	public var obstacles2: GameObject;
	var obstacles : GameObject[];
	var gameSpeed : float;
	public var gameStartSpeed = 4.0;
	public var gameMaxSpeed = 6.0;
	public var speedUpRate = 0.25;
	public var lateralShift = 0.5;
	var playerWidth = 0.015;
	public var isJumping = false;
	public var jumpDurationMax = 3.0;
	public var jumpDurationMin = 1.0;
	public var cam: Camera;
	var gameOver = false;
	var playerSprites : playerSpritesScript;
	var playerScale : playerScaleScript;
	var playerShadow: playerShadowScript;
	var score : scoreScript;
	enum Status {Right, Left, Down, DownRight, DownLeft, Jumping, Wrecked}; 
	public var playerStatus : Status;
	public var speedPercent : float;

	function Start () {
		gameSpeed = gameStartSpeed;	
		obstacles = [obstacles1, obstacles2];
		playerSprites = GetComponent(playerSpritesScript);
		playerScale = GetComponent(playerScaleScript);
		playerShadow = GameObject.Find("shadow").GetComponent(playerShadowScript);
		score = GameObject.Find("score").GetComponent(scoreScript);
		playerStatus = Status.Right;
	}

	function PlayerJump () {

		isJumping = true;
//		anim.SetTrigger("jumpTrigger");
		playerSprites.Jump();

//		var percent = (gameSpeed - gameStartSpeed) / (gameMaxSpeed - gameStartSpeed);
		var jumpDuration = Mathf.Lerp(jumpDurationMin,jumpDurationMax, speedPercent );

		playerScale.CreateAniCurve( jumpDuration, speedPercent);
		playerShadow.CreateAniCurves( jumpDuration, speedPercent);
		score.Jump(speedPercent);
//		Debug.Log("Jump Duration:" + jumpDuration);

		Invoke("PlayerLand", jumpDuration);


	}

	function PlayerLand () {
		isJumping = false;
		playerSprites.Land();
		playerStatus = Status.Down;
		playerSprites.DirectionUpdate();	
	}

	function PlayerMovement(viewPos : Vector3) {

		if (Input.GetKeyDown ( "down" )) {
			playerStatus = Status.Down;
			playerSprites.DirectionUpdate();
		}		

		if (Input.GetKeyDown ( "right" )){
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

		if (Input.GetKeyDown ("left")){
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

	function ObstacleMovement(viewPos : Vector3) {

		for (obs in obstacles){

			if ( playerStatus == Status.Down ) 
				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);

			if (playerStatus == Status.Wrecked) {
					obs.transform.Translate(0, 0, 0);
			}
			if (playerStatus == Status.Jumping) {
					obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
			}
			if (playerStatus == Status.DownRight) {

				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
				if (viewPos.x < 1 - playerWidth) {
					transform.Translate(Time.deltaTime * gameSpeed/2, 0, 0);			
				}
			}

			if ( playerStatus == Status.DownLeft ) {
				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
				if (viewPos.x > playerWidth) {
					transform.Translate(-1 * Time.deltaTime * gameSpeed/2, 0, 0);
				}
			}

		}
	}

	function PlayerSpeed () {
		if (playerStatus !=  Status.Wrecked && playerStatus !=  Status.Right && playerStatus != Status.Left  ) {

			if (gameSpeed < gameMaxSpeed ) {
				gameSpeed += Time.deltaTime * speedUpRate;
			}
		} else {
			gameSpeed = gameStartSpeed;
		}

		speedPercent = (gameSpeed - gameStartSpeed) / (gameMaxSpeed - gameStartSpeed);

//		Debug.Log("GameSpeed: " + gameSpeed);
	}

	function Update () {

		if ( isJumping ) {
			var s = playerScale.anim.Evaluate(Time.time);
//			Debug.Log(s);
			this.transform.localScale = new Vector3(s,s,s);
		}
//		var s = anim.Evaluate(Time.time);
//		this.transform.localScale = new Vector3(s,s,s);
//		transform.localScale += new Vector3(0.1F, 0, 0);

		if (!gameOver) {
			PlayerSpeed();
			var viewPos: Vector3 = cam.WorldToViewportPoint(this.transform.position);
			PlayerMovement(viewPos);
			ObstacleMovement(viewPos);
		} 
	}
}


















