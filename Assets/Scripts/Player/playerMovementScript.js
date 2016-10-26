#pragma strict
public class playerMovementScript extends MonoBehaviour {
	public var obstacles1: GameObject;
	public var obstacles2: GameObject;
	var obstacles : GameObject[];
	public var gameSpeed = 1.0;
	public var lateralShift = 0.5;
	var playerWidth = 0.015;
	public var isJumping = false;
	public var jumpDuration = 3.0;
	public var cam: Camera;
	var anim : Animator;
	var gameOver = false;
	var playerSprites : playerSpritesScript;
	enum Status {Right, Left, Down, DownRight, DownLeft, Jumping, Wrecked}; 
	public var playerStatus : Status;


	function Start () {
		obstacles = [obstacles1, obstacles2];
		anim = GetComponent(Animator);
		playerSprites = GetComponent(playerSpritesScript);
		playerStatus = Status.Right;
	}

	function PlayerJump () {

		isJumping = true;
		anim.SetTrigger("jumpTrigger");
		playerSprites.JumpUpdate();
		Invoke("PlayerLand", jumpDuration);
	}

	function PlayerLand () {
		isJumping = false;
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

//			if (gameOver) {
//				obs.transform.Translate(0, Time.deltaTime * gameSpeed / 5.0 , 0);
//			}
		}
	}

	function Update () {

		if (!gameOver) {
			var viewPos: Vector3 = cam.WorldToViewportPoint(this.transform.position);
			PlayerMovement(viewPos);
			ObstacleMovement(viewPos);
		} 
//		else {
//			ObstacleMovement(viewPos);
//		}
	}
}


















