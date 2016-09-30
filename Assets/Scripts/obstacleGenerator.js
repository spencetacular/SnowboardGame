#pragma strict


public class obstacleGenerator extends MonoBehaviour {
	public var obstacleDesity = 10;
	

	var obstacles : GameObject[];


	function Start() {

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
				var y = Random.Range(-6.0, -15.0 );
				var x = Random.Range(7.0, -7.0);
				var tree = Instantiate(obs, new Vector3(x, y, 0), Quaternion.identity);
				tree.transform.parent = this.transform;
			}
		}


		
		
	}

	function Update () {

	}
}