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
	public var jumpDuration = 3.0;
	var jumpTicker = 0.0;
	var initialScale : Vector3;
	var jumpScale : Vector3;

	// var playerSritesScript : playerSprites;

	public var cam: Camera;

	function Start () {
		// playerSritesScript = GetComponent(playerSprites);
		initialScale = transform.localScale;
		jumpScale = new Vector3(2.0, 2.0, 2.0);
		obstacles = [obstacles1, obstacles2];
		jumpTicker = 0.0;
		// jumpDuration = 3.0;
		Debug.Log(jumpDuration);

	}

	function Jump() {
		if (isJumping == true) {
			jumpTicker += Time.deltaTime;
			var halfway = jumpDuration / 2.0f;
			// Debug.Log(halfway);
			// var scale = Lerp(initialScale, jumpScale, jumpDuration / 2);
			var scaleAmount = 0.0;
			if (jumpTicker <= halfway) {
				scaleAmount = jumpTicker / halfway;
				transform.localScale = Vector3.Lerp(initialScale, jumpScale, scaleAmount);
				// transform.localScale = new Vector3(2.0, 2.0, 2.0);
				// Debug.Log(transform.localScale);
			}
			if (jumpTicker > halfway) {
				scaleAmount = jumpTicker / jumpDuration;
				Debug.Log(scaleAmount);
				transform.localScale = Vector3.Lerp(jumpScale, initialScale, scaleAmount);
			}
			// playerSpriteScript.Jump();
			// Debug.Log("jumpTicker: " + jumpTicker);
			if (jumpTicker >= jumpDuration) {
				isJumping = false;
				jumpTicker = 0.0;
			}
		}
	}

	

	function Update () {
		// Debug.Log("Player Status: " + playerStatus);
		// Debug.Log("isJumping: " + isJumping);

		Jump();
		var viewPos: Vector3 = cam.WorldToViewportPoint(this.transform.position);
		// Debug.Log(viewPos);
		if (Input.GetKeyDown ( "down" ))
				playerStatus = "down";

		if (Input.GetKeyDown ( "right" )){
			if ( playerStatus == "right" && viewPos.x < 1 - playerWidth )
				transform.Translate(lateralShift, 0, 0);
			if ( playerStatus == "downRight" && isJumping == false){
				transform.Translate(0, 0, 0);
				playerStatus = "right";
			}
			if ( playerStatus == "down" || "jumping") 
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
		if (playerStatus == "down") 
			playerStatus = "downLeft";
		if ( playerStatus == "downRight" )
			playerStatus = "down";
		if ( playerStatus == "right" )
			playerStatus = "downRight";
			
	}

	for( obs in obstacles){

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


















