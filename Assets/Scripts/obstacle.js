#pragma strict
public class obstacle extends MonoBehaviour {

	public var density = 1.0;
	var playerMovementScript : playerMovement;
	var scoreScript : score;
	var popUpsScript : popUps;

	function Start () {
		playerMovementScript = GameObject.Find("player").GetComponent(playerMovement);
		scoreScript = GameObject.Find("Score").GetComponent(score);
		popUpsScript = GameObject.Find("sickTrick").GetComponent(popUps);
	}

	function ChildDestroy(){
   Destroy (gameObject);
   // Debug.Log("DESTROY CALLED");
 }

	function OnTriggerExit2D (other : Collider2D) {
			// Destroy(other.gameObject);
			// Debug.Log(this.tag);
			var isJumping = other.GetComponent(playerMovement).isJumping;

			if (this.tag == "obstacle" && isJumping == false) {
				other.GetComponent(playerMovement).playerStatus = "wrecked";
				this.GetComponent(CircleCollider2D).enabled = false;
				if(GetComponent(treeAnimation)){
					GetComponent(treeAnimation).Fall();
				}
			}
			if (this.tag == "jump" && isJumping == false) {
				other.GetComponent(playerMovement).isJumping = true;
				scoreScript.Jump();
				popUpsScript.popUpTicker = popUpsScript.popUpSeconds;
			}
		}

	function Update () {


}

}