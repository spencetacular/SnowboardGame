#pragma strict
public class obstacle extends MonoBehaviour {

	public var density = 1.0;
	var playerMovementScript : playerMovement;
	var score : scoreScript;
	var popUpsScript : popUps;
	var spriteRenderer : SpriteRenderer;
	var baseY : float;
	var playerBaseY : float;
	var isJumping : boolean;


	function Start () {
		playerMovementScript = GameObject.Find("player").GetComponent(playerMovement);
		playerBaseY = -0.5;
		spriteRenderer = GetComponent(SpriteRenderer);
		score = GameObject.Find("Score").GetComponent(scoreScript);
		popUpsScript = GameObject.Find("sickTrick").GetComponent(popUps);
		if (this.transform.Find("basePosition")){
			baseY = this.transform.Find("basePosition").position.y;
		} else {
			Debug.Log("Missing Base Position"); 
		}
		spriteRenderer.sortingOrder = 2;
	}

	function ChildDestroy(){
   		Destroy (gameObject);
	 }

	function OnTriggerExit2D (other : Collider2D) {

		if (this.tag == "obstacle" && isJumping == false) {
			other.GetComponent(playerMovement).playerStatus = "wrecked";
			this.GetComponent(CircleCollider2D).enabled = false;
			if(GetComponent(treeAnimation)){
				GetComponent(treeAnimation).Fall();
			}
		}
		if (this.tag == "jump" && isJumping == false) {
			other.GetComponent(playerMovement).isJumping = true;
			score.Jump();
			popUpsScript.popUpTicker = popUpsScript.popUpSeconds;
		}
	}

	function playerSpriteSortingOrder() {
		baseY = this.transform.Find("basePosition").position.y;

		if (baseY >= playerBaseY)
			spriteRenderer.sortingOrder = 0;
		else 
			spriteRenderer.sortingOrder = 2;
	}



	function Update () {
		isJumping = playerMovementScript.isJumping;
		playerSpriteSortingOrder();

		if (isJumping) 
			spriteRenderer.sortingOrder = 0;
		else 
			playerSpriteSortingOrder();				
	}

}