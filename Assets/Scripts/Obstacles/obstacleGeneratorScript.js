﻿#pragma strict
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

		var allTransforms = new List.<Transform>();
		
		for (var i = transform.childCount - 1; i >= 0; i--) {
			transform.GetChild(i).GetComponent(obstacleScript).ChildDestroy();
		}

		for( obs in obstacles){
			var obstacleProps : obstacleScript = obs.GetComponent(obstacleScript);
			var numObstacles = 	obstacleDesity * obstacleProps.density;

			for (var j = 0; j < numObstacles; j++) {
				var y = Random.Range(transform.position.y +2.0,  transform.position.y + obstacleSpawnHeight );
				var x = Random.Range(7.0, -7.0);
				var poleShift = 1.5;
				if (x >= 0 && x <= poleShift)
					x += poleShift;
				if (x <=0 && x >= poleShift * -1.0)
					x-= poleShift;
				var obstacle = Instantiate(obs, new Vector3(x, y, 0), Quaternion.identity);
				obstacle.transform.parent = this.transform;
				allTransforms.Add(obstacle.transform);
			}
		}

		var numPoles = obstacleSpawnHeight / liftPoleSpacing;

		for (var k = 0; k < numPoles; k++) {
			var poleY = (transform.position.y +2.0) + (k * liftPoleSpacing);
			var rand = Random.Range(0,2);
			var pole = Instantiate(liftPoles[rand], new Vector3(0, poleY, 0), Quaternion.identity);
			pole.transform.parent = this.transform;
			allTransforms.Add(pole.transform);
		}


//		allTransforms.OrderBy(position.y);
	

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