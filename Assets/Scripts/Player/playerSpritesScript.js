#pragma strict
public class playerSpritesScript extends MonoBehaviour {
	public var spriteRight : Sprite;
	public var spriteLeft : Sprite;
	public var spriteDown : Sprite;
	public var spriteDownRight : Sprite;
	public var spriteDownLeft : Sprite;
	public var spriteJump : Sprite;
	public var spriteWrecked : Sprite;
	var previousPlayerStatus = "";
	var previousJumpStatus = false;
	var playerMovement : playerMovementScript;
	var spriteRenderer : SpriteRenderer;
	public var playerBaseY : float;

	function Start () {
		 playerMovement = GetComponent(playerMovementScript);
		 spriteRenderer = GetComponent(SpriteRenderer);
		 GetComponent(SpriteRenderer).sprite = spriteRight;
		 playerBaseY = this.transform.position.y + spriteRenderer.bounds.max.y;
	}

	

	function spriteUpdate (spriteDirection) {
		var isJumping = playerMovement.isJumping;

		if ( spriteDirection == "right") 
			spriteRenderer.sprite = spriteRight;

		if ( spriteDirection == "downRight")
			spriteRenderer.sprite = spriteDownRight;

		if ( spriteDirection  == "left" ) 
			spriteRenderer.sprite = spriteLeft;
		
		if ( spriteDirection == "downLeft") 
			spriteRenderer.sprite = spriteDownLeft;
		
		if ( spriteDirection  == "down" ) 
			spriteRenderer.sprite = spriteDown;
		
		if (spriteDirection == "wrecked") 
				spriteRenderer.sprite = spriteWrecked;
		
		if (isJumping == true) 
			spriteRenderer.sprite = spriteJump;
	}

	function Update () {

		if ( previousPlayerStatus != playerMovement.playerStatus || previousJumpStatus != playerMovement.isJumping) {
			spriteUpdate(playerMovement.playerStatus);
			previousPlayerStatus = playerMovement.playerStatus;
			previousJumpStatus = playerMovement.isJumping;
		}

	}

}