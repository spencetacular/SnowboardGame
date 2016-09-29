#pragma strict
public class obstacleGenerator extends MonoBehaviour {
	public var gameSpeed = 1.0;
	public var obstacleDesity = 10;
	public var obstacle1: GameObject;
	public var obstacle1Density = 1.0;

	function Start() {
		var numObstacles = 	obstacleDesity * obstacle1Density;
		Debug.Log(numObstacles);
		for (var i: int = 0; i < numObstacles; i++) {
			var y = Random.Range(5.0,-10.0);
			var x = Random.Range(7.0,-7.0);
			var tree = Instantiate(obstacle1, new Vector3(x, y, 0), Quaternion.identity);
			tree.transform.parent = this.transform;
			}
	}

	function Update () {
		transform.Translate(0, Time.deltaTime * gameSpeed, Time.deltaTime);
	}
}