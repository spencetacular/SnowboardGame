#pragma strict
public class obstacle extends MonoBehaviour {

	public var density = 1.0;
	var playerMovementScript : playerMovement;
	var scoreScript : score;
	var popUpsScript : popUps;
	var spriteRenderer : SpriteRenderer;
	var yBase : float;
	var isJumping : boolean;

	function Start () {
		playerMovementScript = GameObject.Find("player").GetComponent(playerMovement);
		spriteRenderer = GetComponent(SpriteRenderer);
		scoreScript = GameObject.Find("Score").GetComponent(score);
		popUpsScript = GameObject.Find("sickTrick").GetComponent(popUps);
		if (this.transform.Find("basePosition")){
			yBase = this.transform.Find("basePosition").position.y;
//			Debug.Log(yBase);
		}
		spriteRenderer.sortingOrder = 2;
	}

	function ChildDestroy(){
   		Destroy (gameObject);
	 }

	function OnTriggerExit2D (other : Collider2D) {
//		isJumping = other.GetComponent(playerMovement).isJumping;

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
		isJumping = playerMovementScript.isJumping;

		if (

		if (isJumping) {
			spriteRenderer.sortingOrder = 0;
			Debug.Log(spriteRenderer.sortingOrder);
		}
		
				
	}

}