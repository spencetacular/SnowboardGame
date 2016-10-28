#pragma strict
import System.Collections.Generic;
public class obstacleGeneratorScript extends MonoBehaviour {
	public var obstacleDesity = 10;
	var screenHeight = 5.0;
	var spawnPosition : float;
	var obstacleSpawnHeight: float;
	var initialOffest : float;
	var obstacles : GameObject[];
	public var jump : GameObject;
	public var obstacle1 : GameObject;
	public var obstacle2 : GameObject;
	public var obstacle3 : GameObject;
	public var obstacle4 : GameObject;
	public var obstacle5 : GameObject;
	public var obstacle6 : GameObject;
	public var obstacle7 : GameObject;
	var liftPoles : GameObject[];
	public var liftPole1 : GameObject;
	public var liftPole2 : GameObject;
	public var liftPole3 : GameObject;

	public var liftPoleSpacing = 10.0;
	public var isObstacle1 = true;

	public var obstaclePositions = new List.<obstaclePositionScript>();
	public var spawnedObstacles = new List.<GameObject>();



	function Start() {
		obstacleSpawnHeight = 15.0;
		spawnPosition = -20.0;
		initialOffest = 5.0;
		obstacles = [obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, jump];
		liftPoles = [liftPole1, liftPole2, liftPole3];
		
		respawn();
		if (isObstacle1 == true) 
			transform.position =  Vector3(0, spawnPosition - obstacleSpawnHeight + initialOffest , 0);
		else
			transform.position =  Vector3(0, spawnPosition + initialOffest , 0);
	}

	function respawn () {
	
		transform.position = Vector3(0, spawnPosition, 0);


		
		for (var i = transform.childCount - 1; i >= 0; i--) {
			transform.GetChild(i).GetComponent(obstacleScript).ChildDestroy();
		}

		for( obs in obstacles){
			var obstacle : obstacleScript = obs.GetComponent(obstacleScript);
			var numObstacles = 	obstacleDesity * obstacle.density;

			for (var j = 0; j < numObstacles; j++) {
				var y = Random.Range(transform.position.y +2.0,  transform.position.y + obstacleSpawnHeight );
				var x = Random.Range(7.0, -7.0);
				var o = Instantiate(obs, new Vector3(x, y, 0), Quaternion.identity);
				o.transform.name += j;
//				Debug.Log(o.transform.name);
				o.transform.parent = this.transform;
				var baseY = obstacle.baseY + o.transform.position.y;
//				Debug.Log(baseY + o.transform.position.y);
				obstaclePositions.Add (new obstaclePositionScript(baseY, o.transform.name));
				spawnedObstacles.Add (o);

			}
		}

		var numPoles = obstacleSpawnHeight / liftPoleSpacing;

		for (var k = 0; k < numPoles; k++) {
			var poleY = (transform.position.y +2.0) + (k * liftPoleSpacing);
			var rand = Random.Range(0,2);
			var pole = Instantiate(liftPoles[rand], new Vector3(0, poleY, 0), Quaternion.identity);
			pole.transform.name += k;
			pole.transform.parent = this.transform;
			var poleBaseY = pole.GetComponent(obstacleScript).baseY + poleY;
			obstaclePositions.Add (new obstaclePositionScript(poleBaseY, pole.transform.name));
			spawnedObstacles.Add (pole);
		}



		SetSortingOrder();

	}


	function SetSortingOrder () {

//		obstaclePositions.Add (new obstaclePositionScript(-55555, "t3"));
//		obstaclePositions.Add (new obstaclePositionScript(-66555, "t1"));
//		obstaclePositions.Add (new obstaclePositionScript(-65555, "t2"));
//		obstaclePositions.Add (new obstaclePositionScript(-85533, "t3"));

		obstaclePositions.Sort();

		var orderInLayer = 0;
		for ( op in obstaclePositions) {
//			Debug.Log("Y:" + op.yPos + " Name: " + op.name);
			orderInLayer++;

			for ( so in spawnedObstacles  ) {
				if (op.name == so.transform.name)
//					Debug.Log(so.transform.name);
					so.GetComponent(SpriteRenderer).sortingOrder = orderInLayer;

			}
		}


		
	}





//	function onstacleSpawnOrder() {
//		for (var i = transform.childCount - 1; i >= 0; i--) {
//			transform.GetChild(i).GetComponent(obstacle).ChildDestroy();
//		}
//	}




	function Update () {
		if ( transform.position.y > screenHeight) 
			respawn();
	}
}