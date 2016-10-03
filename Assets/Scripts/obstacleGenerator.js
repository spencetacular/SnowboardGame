#pragma strict
public class obstacleGenerator extends MonoBehaviour {
	public var obstacleDesity = 10;
	var obstacles : GameObject[];
	var screenHeight = 5.0;
	// var initialPosition = screenHeight * -2.0 - 1.0;
	var initialPosition : float;
	public var obstacle1 : GameObject;
	public var obstacle2 : GameObject;


	function Start() {
		initialPosition = -20.0;
		obstacles = [obstacle1, obstacle2];
		respawn();
		// transform.position = Vector3(0, -2, 0);
		
	}

	

	function respawn () {

		// transform.Translate( 0.0, initialPosition, 0.0 );
		transform.position = Vector3(0, initialPosition, 0);
		// Debug.Log("Initial Pos: " + initialPosition);

		// obstacles = new GameObject[transform.childCount];
		
		for (var i = transform.childCount - 1; i >= 0; i--) {
			// obstacles[i] = transform.GetChild(i).gameObject;
			transform.GetChild(i).GetComponent(obstacle).ChildDestroy();
		}

		Debug.Log("child count: "+ transform.childCount);
		if (transform.childCount >0) {

			// GetRidOfChild();
		}

		for( obs in obstacles){
			// obs.active = true;	
		// 	// print(obs.name);

		// 	for(child in obs.transform){
		// 		child.transform.Destoy();
		// 	}

			var obstacleProps : obstacle = obs.GetComponent(obstacle);
			var numObstacles = 	obstacleDesity * obstacleProps.density;
			// print(numObstacles);
			for (var j = 0; j < numObstacles; j++) {

				var y = Random.Range(initialPosition +2.0,  screenHeight * -1.0);
				var x = Random.Range(7.0, -7.0);
				var tree = Instantiate(obs, new Vector3(x, y, 0), Quaternion.identity);
				tree.transform.parent = this.transform;
			}
		}
	}



	function Update () {

		if( transform.position.y > screenHeight ) {
			// transform.position = Vector3(0, initialPosition, 0);
			respawn();
		}

	}
}