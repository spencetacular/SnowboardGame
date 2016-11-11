#pragma strict
public class obstacleScript extends MonoBehaviour {

	public var density = 1.0;
//	var playerMovement : playerMovementScript;
	var baseY : float;
//	var playerBaseY : float;
	private var inFrontOfPlayer = true;

	function Start () {
//		playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
//		playerBaseY = -0.5;

		if (this.transform.Find("basePosition"))
			baseY = (this.transform.Find("basePosition").position.y - this.transform.position.y) / 2.0;
		else
			Debug.Log("Missing Base Position"); 
	}

	function ChildDestroy(){
   		Destroy (gameObject);
	 }

	function OnTriggerExit2D (other : Collider2D) {

		if (this.tag == "obstacle") {
			other.GetComponent(playerMovementScript).playerStatus = other.GetComponent(playerMovementScript).Status.Wrecked;
			other.GetComponent(playerSpritesScript).DirectionUpdate();
			other.GetComponent(playerLivesScript).LoseALife();

			this.GetComponent(CircleCollider2D).enabled = false;
			other.GetComponent(playerSoundsScript).Wreck();
			if(GetComponent(treeAnimationScript)){
				GetComponent(treeAnimationScript).Fall();
				other.GetComponent(playerSoundsScript).TreeFall();
			} 
		}

		if (this.tag == "jump") {
			other.GetComponent(playerMovementScript).PlayerJump();
			other.GetComponent(playerSoundsScript).Jump();

		}
	}

	function Update () {

		if (inFrontOfPlayer ==  true) {

			if (transform.position.y + baseY >= 0) {
				inFrontOfPlayer = false;
				GameObject.Find("player").GetComponent(playerSpritesScript).sortingOrder = GetComponent(SpriteRenderer).sortingOrder + 1;
				
			}
		}
	}
}