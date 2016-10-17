#pragma strict

var spriteRenderer : SpriteRenderer;
var playerMovement : playerMovementScript; 

  
function Start () {
	spriteRenderer = this.GetComponent(SpriteRenderer);
	playerMovement = this.GetComponentInParent(playerMovementScript);
	spriteRenderer.enabled = false;

}

function Update () {

	if (playerMovement.isJumping == true) {

		spriteRenderer.enabled = true;
	}

}