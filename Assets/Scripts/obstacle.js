#pragma strict

#pragma strict
public class obstacle extends MonoBehaviour {

	public var density = 1.0;

	function Start () {

	}

	function ChildDestroy(){
   Destroy (gameObject);
   Debug.Log("DESTROY CALLED");
 }

	function OnTriggerExit2D (other : Collider2D) {
			// Destroy(other.gameObject);
			Debug.Log(this.tag);
			if (this.tag == "obstacle") {
				other.GetComponent(playerMovement).playerStatus = "wrecked";
				this.GetComponent(CircleCollider2D).enabled = false;
			}
			if (this.tag == "jump") {
				other.GetComponent(playerMovement).playerStatus = "jumping";
			}
		}

	function Update () {


}

}