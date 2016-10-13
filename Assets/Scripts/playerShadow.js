#pragma strict

var spriteRenderer : SpriteRenderer;
var playerMovementScript : playerMovement; 

  
function Start () {
	spriteRenderer = this.GetComponent(SpriteRenderer);
	playerMovementScript = this.GetComponentInParent(playerMovement);
	spriteRenderer.enabled = false;

}

function Update () {

	if (playerMovementScript.isJumping == true) {

		spriteRenderer.enabled = true;
	}

}