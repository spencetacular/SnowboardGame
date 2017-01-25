#pragma strict
import System.Collections.Generic;
public class obstacleGeneratorScript extends MonoBehaviour {
	public var obstacleDesity = 10;
	var screenHeight = 5.0;
	var spawnPosition : float;
	var obstacleSpawnHeight: float;
	var initialOffest : float;
	var obstacles : GameObject[];
	var liftPole : GameObject;
	public var liftPoleSpacing = 10.0;
	public var isObstacle1 = true;
	public var obstaclePositions = new List.<obstaclePositionScript>();
	public var spawnedObstacles = new List.<GameObject>();
	public var obstaclesToSpawn : GameObject;

	function Start() {
		InitialSpawn();
	}

	function InitialSpawn () {
		obstaclesToSpawn.SetActive(false);
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

		spawnedObstacles.Clear();
		obstaclePositions.Clear();

		for( obs in obstacles){
			var obstacle : obstacleScript = obs.GetComponent(obstacleScript);
			var numObstacles = 	obstacleDesity * obstacle.density;

			for (var j = 0; j < numObstacles; j++) {
				var y = Random.Range(transform.position.y +2.0,  transform.position.y + obstacleSpawnHeight );
				var x = Random.Range(7.0, -7.0);
				var o = Instantiate(obs, new Vector3(x, y, 0), Quaternion.identity);
				o.transform.name += j + Random.Range( 1, 1000);
				o.transform.parent = this.transform;
				var baseY = obstacle.baseY + o.transform.position.y;
				if(o.GetComponent(treeAnimationScript)) 
					o.GetComponent(treeAnimationScript).RandomScale();
				if(obs.tag != "jump") {
					obstaclePositions.Add (new obstaclePositionScript(baseY, o.transform.name));
					spawnedObstacles.Add (o);
				}
			}
		}

		var numPoles = obstacleSpawnHeight / liftPoleSpacing;

		for (var k = 0; k < numPoles; k++) {
			var poleY : float;

			poleY = (transform.position.y +2.0) + (k * liftPoleSpacing);
			

			if (k != 0) {
				var pole = Instantiate(liftPole, new Vector3(-0.81, poleY, 0), Quaternion.identity);
				pole.transform.name += k + Random.Range( 1, 1000);
				pole.transform.parent = this.transform;
				var poleBaseY = pole.GetComponent(obstacleScript).baseY + poleY;
				obstaclePositions.Add (new obstaclePositionScript(poleBaseY, pole.transform.name));
				spawnedObstacles.Add (pole);
			}
		}

		SetSortingOrder();
	}

	function SetSortingOrder () {

		obstaclePositions.Sort();
		var orderInLayer = 0;

		for ( op in obstaclePositions) {
			orderInLayer++;
			op.orderInLayer = orderInLayer;
		
			for ( so in spawnedObstacles  ) {
				if (op.name == so.transform.name)
					so.GetComponent(SpriteRenderer).sortingOrder = op.orderInLayer;

			}
		}
	}

	function Update () {
		if ( transform.position.y > screenHeight) 
			respawn();
	}
}