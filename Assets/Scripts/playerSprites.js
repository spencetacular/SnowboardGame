#pragma strict
public class playerSprites extends MonoBehaviour {
	public var spriteRight : Sprite;
	public var spriteLeft : Sprite;
	public var spriteDown : Sprite;
	public var spriteDownRight : Sprite;
	public var spriteDownLeft : Sprite;
	public var spriteJump : Sprite;
	public var spriteWrecked : Sprite;
	var previousPlayerStatus = "";
	var previousJumpStatus = false;
	var playerMovementScript : playerMovement;
	var spriteRenderer : SpriteRenderer;

	function Start () {
		 playerMovementScript = GetComponent(playerMovement);
		 spriteRenderer = GetComponent(SpriteRenderer);
		 GetComponent(SpriteRenderer).sprite = spriteRight;
	}

	

	function spriteUpdate (spriteDirection) {
		var isJumping = playerMovementScript.isJumping;
		// spriteRenderer.flipX = false;

		if ( spriteDirection == "right") {
			spriteRenderer.sprite = spriteRight;

		}
		if ( spriteDirection == "downRight") {
			spriteRenderer.sprite = spriteDownRight;
		}

		if ( spriteDirection  == "left" ) {
			spriteRenderer.sprite = spriteLeft;
			// spriteRenderer.flipX = true;
		}
		if ( spriteDirection == "downLeft") {
			spriteRenderer.sprite = spriteDownLeft;
			// spriteRenderer.flipX = true;
		}
		if ( spriteDirection  == "down" ) {
			spriteRenderer.sprite = spriteDown;
		}
		if (spriteDirection == "wrecked") 
				spriteRenderer.sprite = spriteWrecked;
		if (isJumping == true) 
			spriteRenderer.sprite = spriteJump;
	}

	function Update () {

		if ( previousPlayerStatus != playerMovementScript.playerStatus || previousJumpStatus != playerMovementScript.isJumping) {
			spriteUpdate(playerMovementScript.playerStatus);
			previousPlayerStatus = playerMovementScript.playerStatus;
			previousJumpStatus = playerMovementScript.isJumping;
		}

	}

}