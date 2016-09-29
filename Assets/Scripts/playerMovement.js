#pragma strict
public class playerMovement extends MonoBehaviour {
	public var obstacles: GameObject;
	public var movementSpeed = 0.5;

	function Start () {

	}

	function Update () {
		if (Input.GetKeyDown ("left")){
			transform.Translate(movementSpeed * -1.0, 0, 0);
		}

		if (Input.GetKeyDown ("right")){
			transform.Translate(movementSpeed, 0, 0);
		}

		if (Input.GetKeyDown ("down")){
			
		}

	}
}