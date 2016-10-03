#pragma strict
public class obstacleGenerator extends MonoBehaviour {
	public var obstacleDesity = 10;
	var obstacles : GameObject[];
	var screenHeight = 5.0;
	// var initialPosition = screenHeight * -2.0 - 1.0;
	var spawnPosition : float;
	var obstacleSpawnHeight: float;
	var initialOffest : float;
	public var jump : GameObject;
	public var obstacle1 : GameObject;
	public var obstacle2 : GameObject;
	public var obstacle3 : GameObject;
	public var isObstacle1 = true;


	function Start() {
		obstacleSpawnHeight = 15.0;
		spawnPosition = -20.0;
		initialOffest = 5.0;
		obstacles = [obstacle1, obstacle2, obstacle3, jump];
		respawn();

		if (isObstacle1 == true) {
			transform.position =  Vector3(0, spawnPosition - obstacleSpawnHeight + initialOffest , 0);
		}
		else {
			transform.position =  Vector3(0, spawnPosition + initialOffest , 0);
		}
	}

	

	function respawn () {
	
			transform.position = Vector3(0, spawnPosition, 0);
		
		for (var i = transform.childCount - 1; i >= 0; i--) {
			transform.GetChild(i).GetComponent(obstacle).ChildDestroy();
		}

	

		for( obs in obstacles){
			var obstacleProps : obstacle = obs.GetComponent(obstacle);
			var numObstacles = 	obstacleDesity * obstacleProps.density;

			for (var j = 0; j < numObstacles; j++) {

				var y = Random.Range(transform.position.y +2.0,  transform.position.y + obstacleSpawnHeight );
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