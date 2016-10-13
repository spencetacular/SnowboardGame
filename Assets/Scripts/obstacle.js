#pragma strict
public class obstacle extends MonoBehaviour {

	public var density = 1.0;
	var playerMovementScript : playerMovement;
	var scoreScript : score;
	var popUpsScript : popUps;
	var spriteRenderer : SpriteRenderer;
	var baseY : float;
	var playerBaseY : float;
	var isJumping : boolean;
//	public var playerCanHit : Collider2D;

	function Start () {
		playerMovementScript = GameObject.Find("player").GetComponent(playerMovement);
//		playerBaseY = GameObject.Find("player").GetComponent(playerSprites).playerBaseY;
		playerBaseY = -0.5;
		spriteRenderer = GetComponent(SpriteRenderer);
		scoreScript = GameObject.Find("Score").GetComponent(score);
		popUpsScript = GameObject.Find("sickTrick").GetComponent(popUps);
		if (this.transform.Find("basePosition")){
			baseY = this.transform.Find("basePosition").position.y;
//			Debug.Log(yBase);
		} else {
			Debug.Log("Missing Base Position"); 
		}
		spriteRenderer.sortingOrder = 2;

//		baseY = spriteRenderer.bounds.max.y + this.transform.position.y;

		Debug.Log(playerBaseY);
	}

	function ChildDestroy(){
   		Destroy (gameObject);
	 }

	function OnTriggerExit2D (other : Collider2D) {
//		isJumping = other.GetComponent(playerMovement).isJumping;
			
//			Debug.Log("HIT!!!!!!!!!!!!");
//			Debug.Log(this.GetComponent(CircleCollider2D).name);
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

	function playerSpriteSortingOrder() {
		baseY = this.transform.Find("basePosition").position.y;

//		Debug.Log("Bounds " + spriteRenderer.bounds.max.y);	
//		Debug.Log("Position Y: " + this.transform.position.y);	

		if (baseY >= playerBaseY) {
			spriteRenderer.sortingOrder = 0;
		} else {
			spriteRenderer.sortingOrder = 2;
		}

	}



	function Update () {

		

		isJumping = playerMovementScript.isJumping;

		playerSpriteSortingOrder();


		if (isJumping) {
			spriteRenderer.sortingOrder = 0;
//			Debug.Log(spriteRenderer.sortingOrder);
		} else {
			playerSpriteSortingOrder();
		}
		
				
	}

}