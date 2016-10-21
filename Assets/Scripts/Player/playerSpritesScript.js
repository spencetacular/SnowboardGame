#pragma strict
public class playerSpritesScript extends MonoBehaviour {
	public var spriteRight : Sprite;
	public var spriteLeft : Sprite;
	public var spriteDown : Sprite;
	public var spriteDownRight : Sprite;
	public var spriteDownLeft : Sprite;
	public var spriteJump : Sprite;
	public var spriteWrecked : Sprite;
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

	function JumpUpdate() {
		spriteRenderer.sprite = spriteJump;
	}

	function DirectionUpdate () {

		
		if ( !playerMovement.isJumping ) {
			if ( playerMovement.playerStatus  ==  playerMovement.Status.Down ) 
				spriteRenderer.sprite = spriteDown;

			if ( playerMovement.playerStatus  ==  playerMovement.Status.Right ) 
				spriteRenderer.sprite = spriteRight;

			if ( playerMovement.playerStatus  ==  playerMovement.Status.DownRight ) 
				spriteRenderer.sprite = spriteDownRight;

			if ( playerMovement.playerStatus  ==  playerMovement.Status.Left ) 
				spriteRenderer.sprite = spriteLeft;
			
			if ( playerMovement.playerStatus  ==  playerMovement.Status.DownLeft ) 
				spriteRenderer.sprite = spriteDownLeft;
			
			if ( playerMovement.playerStatus  ==  playerMovement.Status.Wrecked ) 
					spriteRenderer.sprite = spriteWrecked;
		}
		
	}

	function Update () {

	}

}