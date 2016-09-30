#pragma strict
public class obstacleGenerator extends MonoBehaviour {
	public var obstacleDesity = 10;
	var obstacles : GameObject[];
	var screenHeight = 5.0;
	var initialPosition = screenHeight * -1.0 - 1.0;


	function Start() {
		respawn();
		transform.Translate( 0.0, 0.0, 0.0 );
		
	}

	function respawn () {

		transform.Translate( 0.0, initialPosition, 0.0 );

		obstacles = new GameObject[transform.childCount];
		for (var i = transform.childCount - 1; i >= 0; i--) {
			obstacles[i] = transform.GetChild(i).gameObject;
		}

		for( obs in obstacles){
			print(obs.name);
			var props: obstacleProps = obs.GetComponent(obstacleProps);
			var numObstacles = 	obstacleDesity * props.density;
			print(numObstacles);
			for (var j = 0; j < numObstacles; j++) {

				var y = Random.Range(initialPosition, -15.0 );
				var x = Random.Range(7.0, -7.0);
				var tree = Instantiate(obs, new Vector3(x, y, 0), Quaternion.identity);
				tree.transform.parent = this.transform;
			}
		}	
	}

	function Update () {

		if( transform.position.y > screenHeight ) {
			transform.Translate( 0.0, initialPosition, 0.0 );
			// respawn();
		}

	}
}