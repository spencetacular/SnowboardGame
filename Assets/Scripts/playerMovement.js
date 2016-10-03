#pragma strict
public class playerMovement extends MonoBehaviour {
	public var obstacles1: GameObject;
	public var obstacles2: GameObject;
	var obstacles : GameObject[];

	public var gameSpeed = 1.0;
	public var lateralShift = 0.5;
	var playerWidth = 0.015;
	public var playerStatus = "right";

	public var cam: Camera;

	function Start () {
		// cam = GetComponent.<Camera>();

		obstacles = [obstacles1, obstacles2];

	}

	function downLeftMovement(){
		// Debug.Log(cam.position);
		// if (viewPos.x > 0.5F)
		// 	print("target is on the right side!");
		// else
		// 	print("target is on the left side!");
		
	}

	function Update () {

		var viewPos: Vector3 = cam.WorldToViewportPoint(this.transform.position);
		Debug.Log(viewPos);
		if (Input.GetKeyDown ( "down" ))
				playerStatus = "down";

		if (Input.GetKeyDown ( "right" )){
			if ( playerStatus == "right" && viewPos.x < 1 - playerWidth )
				transform.Translate(lateralShift, 0, 0);
			if ( playerStatus == "downRight" ){
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
		if ( playerStatus == "downLeft" ){
			transform.Translate(0, 0, 0);
			playerStatus = "left";
		}
		if (playerStatus == "down" || "jumping") 
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


















