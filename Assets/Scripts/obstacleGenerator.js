#pragma strict
//import System.Linq;
import System.Collections.Generic;

public class obstacleGenerator extends MonoBehaviour {
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
//	var sortObs: GameObject[];
//	var totalNumObstacles = 0;

	public var liftPoleSpacing = 10.0;
	public var isObstacle1 = true;

	function Start() {
		obstacleSpawnHeight = 15.0;
		spawnPosition = -20.0;
		initialOffest = 5.0;
		obstacles = [obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, jump];
		liftPoles = [liftPole1, liftPole2, liftPole3];
//		sortObs = [obstacle1,obstacle2];
		
		respawn();
		if (isObstacle1 == true) 
			transform.position =  Vector3(0, spawnPosition - obstacleSpawnHeight + initialOffest , 0);
		else
			transform.position =  Vector3(0, spawnPosition + initialOffest , 0);
	}

//	function SortObstacles(obstacles : Transform[]) {
//		Debug.Log(obstacles.length);
//		for (obs in obstacles) {
////			obs.transform.position = new Vector3(0,0,0);
//		}

//		var sortedObs = new Transform[obstacles.length];
//		var j = 0;

//		for (var i = 0; i < obstacles.length; i++) {
//			var j = 0;
////			sortedObs[i] = obstacles[i];
////			test[i].position = new Vector3(0,0,0);
//		}


//		return obstacles;
  		
// 	}

// 	function SortOrder(totalNumObstacles : int) { 
//// 		var totalNumObstacles : int;
// 		var obstaclesToSort = new Transform[totalNumObstacles];
// 		Debug.Log("total Obstacles:" + totalNumObstacles);
// 		Debug.Log("child chount: " + transform.childCount);
//
//
//// 		IEnumerable<GameObject> platforms = GameObject.FindGameObjectsWithTag("Platform");
//// 		platforms = platforms.OrderBy(platform => platform.transform.position);
//
//// 		var obs : IEnumerable : GameObject; 
//
////	 	for ( obs in obstacles) {
////				var obstacleProps : obstacle = obs.GetComponent(obstacle);
////				totalNumObstacles += obstacleDesity * obstacleProps.density;
////		}
////
////		for ( pole in liftPoles) {
////
////		}
//
//
//
//		for (var i = 0; i < totalNumObstacles; i++) {
//
//			obstaclesToSort[i] = transform.GetChild(i);
////			Debug.Log(sortObstables[i].position.y);
//		}
//
////		SortObstacles(obstaclesToSort);
//
////		sortObstables.Sort(CompareCondition);
//
////		Debug.Log("total Obstacles:" + totalNumObstacles);
//
// 		
// 	}



	function respawn () {

		var totalNumObstacles = 0;

		transform.position = Vector3(0, spawnPosition, 0);
		
		for (var i = transform.childCount - 1; i >= 0; i--) {
			transform.GetChild(i).GetComponent(obstacle).ChildDestroy();
		}


//		 var sortObs: GameObject[];

		for( obs in obstacles) {
			var obstacleProps : obstacle = obs.GetComponent(obstacle);
			var numObstacles = 	obstacleDesity * obstacleProps.density;
			totalNumObstacles += numObstacles;

			for (var j = 0; j < numObstacles; j++) {
				var y = Random.Range(transform.position.y +2.0,  transform.position.y + obstacleSpawnHeight );
				var x = Random.Range(7.0, -7.0);
				var poleShift = 1.5;
				if (x >= 0 && x <= poleShift)
					x += poleShift;
				if (x <=0 && x >= poleShift * -1.0)
					x-= poleShift;
				var spawnedObs = Instantiate(obs, new Vector3(x, y, 0), Quaternion.identity);
				spawnedObs.transform.parent = this.transform;
//				sortObs[j] = spawnedObs;
			}
		}


//		sortObs.Sort(CompareCondition);
//		for ( s in sortObs ) {
//			Debug.Log(s.GetComponent(obstacle));
//		}



		var numPoles = obstacleSpawnHeight / liftPoleSpacing;

		totalNumObstacles += numPoles;

		for (var k = 0; k < numPoles; k++) {
			var poleY = (transform.position.y +2.0) + (k * liftPoleSpacing);
			var rand = Random.Range(0,2);
			var pole = Instantiate(liftPoles[rand], new Vector3(0, poleY, 0), Quaternion.identity);
			pole.transform.parent = this.transform;
		}

//		SortOrder(transform.childCount);
	}




	function Update () {
		if ( transform.position.y > screenHeight) 
			respawn();
	}
}