﻿#pragma strict
public class obstacleScript extends MonoBehaviour {

	public var density = 1.0;
	var baseY : float;
	private var inFrontOfPlayer = true;
	private var inFrontOfYeti = true;
	private var playerSprites : playerSpritesScript;
	private var playerBasePosY : float;
	public var yeti : GameObject;
	private var yetiSprites : yetiMovementScript;
	public var yetiBasePosY : GameObject;

	function Start () {
		playerSprites = GameObject.Find("player").GetComponent(playerSpritesScript);
		yeti = GameObject.Find("yeti");
		yetiBasePosY =  GameObject.Find("yetiBasePosition");
		yetiSprites = yeti.GetComponent(yetiMovementScript);
		if (this.transform.Find("basePosition"))
			baseY = (this.transform.Find("basePosition").position.y - this.transform.position.y) / 2.0;
		else
			Debug.Log("Missing Base Position"); 

		playerBasePosY = GameObject.Find("playerBasePosition").transform.position.y;
//		yetiBasePosY = GameObject.Find("yetiBasePosition").transform.position.y;
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
			other.GetComponent(playerSpritesScript).soundEffects.Wreck();
			if(GetComponent(treeAnimationScript)){
				GetComponent(treeAnimationScript).Fall();
				other.GetComponent(playerSpritesScript).soundEffects.TreeFall();
			} 
		}

		if (this.tag == "jump") {
			other.GetComponent(playerMovementScript).PlayerJump();

		}
	}

	function Update () {

		if (inFrontOfPlayer ==  true) {

			if (transform.position.y + baseY >= playerBasePosY) {
				inFrontOfPlayer = false;
				playerSprites.sortingOrder = GetComponent(SpriteRenderer).sortingOrder + 1;	

			}
		}

		if (inFrontOfYeti ==  true) {
				
			if (transform.position.y + baseY >= yetiBasePosY.transform.position.y) {
				inFrontOfYeti = false;
				yetiSprites.GetComponent(SpriteRenderer).sortingOrder = GetComponent(SpriteRenderer).sortingOrder + 1;	

			}
		}
	}
}