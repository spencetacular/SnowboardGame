#pragma strict
public class obstacleScript extends MonoBehaviour {

	public var density = 1.0;
	var playerMovement : playerMovementScript;
	var score : scoreScript;
	var popUps : popUpsScript;
	var spriteRenderer : SpriteRenderer;
	var baseY : float;
	var playerBaseY : float;
	var isJumping : boolean;


	function Start () {
		playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
		playerBaseY = -0.5;
		spriteRenderer = GetComponent(SpriteRenderer);
		score = GameObject.Find("Score").GetComponent(scoreScript);
		popUps = GameObject.Find("sickTrick").GetComponent(popUpsScript);
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
			other.GetComponent(playerMovementScript).playerStatus = "wrecked";
			this.GetComponent(CircleCollider2D).enabled = false;
			if(GetComponent(treeAnimationScript)){
				GetComponent(treeAnimationScript).Fall();
			}
		}
		if (this.tag == "jump" && isJumping == false) {
			other.GetComponent(playerMovementScript).isJumping = true;
			score.Jump();
			popUps.popUpTicker = popUps.popUpSeconds;
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
		isJumping = playerMovement.isJumping;
		playerSpriteSortingOrder();

		if (isJumping) 
			spriteRenderer.sortingOrder = 0;
		else 
			playerSpriteSortingOrder();				
	}

}