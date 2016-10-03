#pragma strict

#pragma strict
public class obstacle extends MonoBehaviour {

	function Start () {

	}

	function OnTriggerEnter2D (other : Collider2D) {
			// Destroy(other.gameObject);
			Debug.Log("Collision");
		}

	function Update () {

		Debug.Log("is working");

}

}