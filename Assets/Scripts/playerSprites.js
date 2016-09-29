#pragma strict
public class playerSprites extends MonoBehaviour {
	public var spriteRight : Sprite;
//	public var spriteLeft : Sprite;
	public var spriteDown : Sprite;
	public var spriteDownRight : Sprite;
	public var spriteJump : Sprite;
	public var spriteCrashed : Sprite;
	var previousPlayerStatus = "";
	var playerMovementScript : playerMovement;
	var spriteRenderer : SpriteRenderer;



//	gameObject.GetComponent(HingeJoint) as HingeJoint;

	function Start () {
		 playerMovementScript = GetComponent(playerMovement);
		 spriteRenderer = GetComponent(SpriteRenderer);
		 GetComponent(SpriteRenderer).sprite = spriteRight;
	}

	function spriteUpdate (spriteDirection) {
//		var playerSprite : SpriteRenderer =  GetComponent(SpriteRenderer);
//		switch (spriteDirection) {
//			case "right":
//				GetComponent(SpriteRenderer).sprite = spriteRight;
//			case "down":
//				GetComponent(SpriteRenderer).sprite = spriteDown;
//		}

		spriteRenderer.flipX = false;

		if ( spriteDirection == "right") {
			spriteRenderer.sprite = spriteRight;

		}
		if ( spriteDirection == "downRight") {
			spriteRenderer.sprite = spriteDownRight;
		}

		if ( spriteDirection  == "left" ) {
			spriteRenderer.sprite = spriteRight;
			spriteRenderer.flipX = true;
		}
		if ( spriteDirection == "downLeft") {
			spriteRenderer.sprite = spriteDownRight;
			spriteRenderer.flipX = true;
		}
		if ( spriteDirection  == "down" ) {
			spriteRenderer.sprite = spriteDown;
		}
	}

	function Update () {

		if ( previousPlayerStatus != playerMovementScript.playerStatus ) {
			spriteUpdate(playerMovementScript.playerStatus);
			previousPlayerStatus = playerMovementScript.playerStatus;
		}



		Debug.Log(playerMovementScript.playerStatus);

	}

}