#pragma strict

#pragma strict
public class obstacle extends MonoBehaviour {

	public var density = 1.0;
	var playerMovementScript : playerMovement;

	function Start () {
		playerMovementScript = GameObject.Find("player").GetComponent(playerMovement);
	}

	function ChildDestroy(){
   Destroy (gameObject);
   Debug.Log("DESTROY CALLED");
 }

	function OnTriggerExit2D (other : Collider2D) {
			// Destroy(other.gameObject);
			// Debug.Log(this.tag);
			var isJumping = other.GetComponent(playerMovement).isJumping;

			if (this.tag == "obstacle" && isJumping == false) {
				other.GetComponent(playerMovement).playerStatus = "wrecked";
				this.GetComponent(CircleCollider2D).enabled = false;
			}
			if (this.tag == "jump" && isJumping == false) {
				other.GetComponent(playerMovement).isJumping = true;
			}
		}

	function Update () {


}

}