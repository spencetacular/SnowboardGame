#pragma strict
public class playerMovementScript extends MonoBehaviour {
	public var obstacles1: GameObject;
	public var obstacles2: GameObject;
	var obstacles : GameObject[];
	public var gameSpeed = 1.0;
	public var lateralShift = 0.5;
	var playerWidth = 0.015;
	public var playerStatus = "right";
	public var isJumping = false;
	var jumpPreviosState = false;
	public var jumpDuration = 3.0;
	var jumpTicker = 0.0;
	var initialScale : Vector3;
	public var cam: Camera;
	var anim : Animator;
	var gameOver = false;

	enum Status {Right, Left, Down, DownRight, DownLeft, Jumping, Wrecked}; 
	public var pStatus : Status; 

	function Start () {
		initialScale = transform.localScale;
		obstacles = [obstacles1, obstacles2];
		jumpTicker = 0.0;
		anim = GetComponent(Animator);
		pStatus = Status.Right;
	}

	function PlayerJump() {

		if (isJumping == true) {

			if (jumpPreviosState != isJumping) {
				anim.SetTrigger("jumpTrigger");
				jumpPreviosState = isJumping;	
			}
			// TODO CHANGE TO INVODE INVOKE
			jumpTicker += Time.deltaTime;
			if (jumpTicker >= jumpDuration) {
				isJumping = false;
				jumpTicker = 0.0;
				jumpPreviosState = false;
			}
		}
	}

	function PlayerMovement(viewPos : Vector3) {

		if (Input.GetKeyDown ( "down" )) {
				pStatus = Status.Down;
				playerStatus = "down";
			}

			if (Input.GetKeyDown ( "right" )){
				if ( playerStatus == "right" && viewPos.x < 1 - playerWidth )
					transform.Translate(lateralShift, 0, 0);
				if ( playerStatus == "downRight" && isJumping == false){
					transform.Translate(0, 0, 0);
					playerStatus = "right";
				}
				if ( playerStatus == "down") 
					playerStatus = "downRight";
				if ( playerStatus == "downLeft" )
					playerStatus = "down";
				if ( playerStatus == "left" )
					playerStatus = "downLeft";
			}

			if (Input.GetKeyDown ("left")){
				if ( playerStatus == "left" && viewPos.x > playerWidth)
					transform.Translate(-lateralShift, 0, 0);
				if ( playerStatus == "downLeft" && isJumping == false){
					transform.Translate(0, 0, 0);
					playerStatus = "left";
				}
				if (playerStatus == "down" ) 
					playerStatus = "downLeft";
				if ( playerStatus == "downRight" )
					playerStatus = "down";
				if ( playerStatus == "right" )
					playerStatus = "downRight";
					
			}

	}

	function ObstacleMovement(viewPos : Vector3) {
		for (obs in obstacles){

			if ( playerStatus == "down" ) 
				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);

			if (playerStatus == "wrecked") {
					obs.transform.Translate(0, 0, 0);
			}
			if (playerStatus == "jumping") {
					obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
			}
			if ( playerStatus == "downRight" ) {

				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
				if (viewPos.x < 1 - playerWidth) {
					transform.Translate(Time.deltaTime * gameSpeed/2, 0, 0);			
				}
			}

			if ( playerStatus == "downLeft" ) {
				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
				if (viewPos.x > playerWidth) {
					transform.Translate(-1 * Time.deltaTime * gameSpeed/2, 0, 0);
				}
			}
		}
	}

	function Update () {

		if (!gameOver) {
			PlayerJump();
			var viewPos: Vector3 = cam.WorldToViewportPoint(this.transform.position);
			PlayerMovement(viewPos);
			ObstacleMovement(viewPos);
		}



	}
}


















