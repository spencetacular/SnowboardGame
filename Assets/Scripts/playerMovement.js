#pragma strict
public class playerMovement extends MonoBehaviour {
	public var obstacles1: GameObject;
	public var obstacles2: GameObject;
	var obstacles : GameObject[];
	public var gameSpeed = 1.0;
	public var movementSpeed = 0.5;
	public var playerStatus = "right";

	function Start () {
		obstacles = [obstacles1, obstacles2];

	}

	function Update () {

		// Debug.Log(playerStatus);
		if (Input.GetKeyDown ( "down" ))
				playerStatus = "down";

		if (Input.GetKeyDown ( "right" )){
			if ( playerStatus == "right" )
				transform.Translate(movementSpeed, 0, 0);
			if ( playerStatus == "downRight" ){
				transform.Translate(0, 0, 0);
				playerStatus = "right";
			}
			if ( playerStatus == "down" ) 
				playerStatus = "downRight";
			if ( playerStatus == "downLeft" )
				playerStatus = "down";
			if ( playerStatus == "left" )
				playerStatus = "downLeft";
			
			
		}

	if (Input.GetKeyDown ("left")){
		if ( playerStatus == "left")
			transform.Translate(-movementSpeed, 0, 0);
		if ( playerStatus == "downLeft" ){
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

		if ( playerStatus == "downRight" ) 
			obs.transform.Translate(-1 * Time.deltaTime * gameSpeed, Time.deltaTime * gameSpeed, 0);

		if ( playerStatus == "downLeft" ) 
			obs.transform.Translate(Time.deltaTime * gameSpeed, Time.deltaTime * gameSpeed, 0);

		if (playerStatus == "wrecked") {
				obs.transform.Translate(0, 0, 0);
		}
	}


	}
}


















