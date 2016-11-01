﻿#pragma strict
public class obstacleScript extends MonoBehaviour {

	public var density = 1.0;
	var playerMovement : playerMovementScript;
	var score : scoreScript;
	var popUps : popUpsScript;
	var spriteRenderer : SpriteRenderer;
	var baseY : float;
	var playerBaseY : float;
	var isJumping : boolean;
	var inFrontOfPlayer = true;


	function Start () {
		playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
		playerBaseY = -0.5;
		spriteRenderer = GetComponent(SpriteRenderer);
		score = GameObject.Find("score").GetComponent(scoreScript);
		popUps = GameObject.Find("sickTrick").GetComponent(popUpsScript);
		if (this.transform.Find("basePosition")){
			baseY = (this.transform.Find("basePosition").position.y - this.transform.position.y) / 2.0;
		} else {
			Debug.Log("Missing Base Position"); 
		}
	}

	function ChildDestroy(){
   		Destroy (gameObject);
	 }

	function OnTriggerExit2D (other : Collider2D) {

//		if (this.tag == "obstacle" && isJumping == false) {
//			other.GetComponent(playerMovementScript).playerStatus = other.GetComponent(playerMovementScript).Status.Wrecked;
//			other.GetComponent(playerSpritesScript).DirectionUpdate();
//			other.GetComponent(playerLivesScript).LoseALife();
//
//			this.GetComponent(CircleCollider2D).enabled = false;
//			other.GetComponent(playerSoundsScript).Wreck();
//			if(GetComponent(treeAnimationScript)){
//				GetComponent(treeAnimationScript).Fall();
//				other.GetComponent(playerSoundsScript).TreeFall();
//			} 
//		}
//
//		if (this.tag == "jump" && isJumping == false) {
//			other.GetComponent(playerMovementScript).PlayerJump();
//			other.GetComponent(playerSoundsScript).Jump();
//			score.Jump();
//			popUps.PopUp();
//		}
	}

//	function playerSpriteSortingOrder() {
//		baseY = this.transform.Find("basePosition").position.y;
//
//		if (baseY >= playerBaseY)
//			spriteRenderer.sortingOrder = 0;
//		else 
//			spriteRenderer.sortingOrder = 2;
//	}

	function Update () {
		isJumping = playerMovement.isJumping;

		if (inFrontOfPlayer ==  true) {
			Debug.Log("Y: " + transform.position.y);
			Debug.Log("BaseY: " + baseY);
			var added =  transform.position.y + baseY;
			Debug.Log("Added: " + added );

			if (transform.position.y + baseY >= 0) {
				Debug.Log("passed player");
				GameObject.Find("player").GetComponent(SpriteRenderer).sortingOrder = GetComponent(SpriteRenderer).sortingOrder + 1;
				inFrontOfPlayer = false;
			}
		}

//		playerSpriteSortingOrder();
//
//		if (isJumping) 
//			spriteRenderer.sortingOrder = 0;
//		else 
//			playerSpriteSortingOrder();				
	}

}