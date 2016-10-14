#pragma strict
public class playerMovement extends MonoBehaviour {
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
	var jumpScale : Vector3;
	public var cam: Camera;
	var anim : Animator;

	function Start () {
		initialScale = transform.localScale;
		jumpScale = new Vector3(2.0, 2.0, 2.0);
		obstacles = [obstacles1, obstacles2];
		jumpTicker = 0.0;
		anim = GetComponent(Animator);
	}

	function Jump() {

		if (isJumping == true) {

			if (jumpPreviosState != isJumping) {
//				anim.SetTrigger("jumpTrigger");
				jumpPreviosState = isJumping;
				
			}
			jumpTicker += Time.deltaTime;
			var halfway = jumpDuration / 2.0f;
			var scaleAmount = 0.0;
//			if (jumpTicker <= halfway) {
//				scaleAmount = jumpTicker / halfway;
//				transform.localScale = Vector3.Lerp(initialScale, jumpScale, scaleAmount);
//			}
//			if (jumpTicker > halfway) {
//				scaleAmount = jumpTicker / jumpDuration;
//				transform.localScale = Vector3.Lerp(jumpScale, initialScale, scaleAmount);
//			}
			if (jumpTicker >= jumpDuration) {
				isJumping = false;
				jumpTicker = 0.0;
				jumpPreviosState = false;
			}
		}
	}

	function Update () {

		Jump();
		var viewPos: Vector3 = cam.WorldToViewportPoint(this.transform.position);
		if (Input.GetKeyDown ( "down" ))
				playerStatus = "down";

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
}


















