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

			switch (playerMovement.playerStatus)  
			{
				case  playerMovement.Status.Down:
					spriteRenderer.sprite = spriteDown;
					break;
				case  playerMovement.Status.Right:
					spriteRenderer.sprite = spriteRight;
					break;
				case  playerMovement.Status.Left:
					spriteRenderer.sprite = spriteLeft;
					break;
				case  playerMovement.Status.DownRight:
					spriteRenderer.sprite = spriteDownRight;
					break;
				case  playerMovement.Status.DownLeft:
					spriteRenderer.sprite = spriteDownLeft;
					break;
				case  playerMovement.Status.Wrecked:
					spriteRenderer.sprite = spriteWrecked;
					break;	
			}
		}
		
	}

	function Update () {

	}

}