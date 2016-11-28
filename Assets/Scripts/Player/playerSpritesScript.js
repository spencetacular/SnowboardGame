#pragma strict
public class playerSpritesScript extends MonoBehaviour {
	public var spriteRight : Sprite;
	public var spriteLeft : Sprite;
	public var spriteDown : Sprite;
	public var spriteDownRight : Sprite;
	public var spriteDownLeft : Sprite;
	public var spriteJump : Sprite;
	public var spriteWrecked : Sprite;
	var playerMovement : playerMovementScript;
	var playerParticles : playerParticlesScript;
	var spriteRenderer : SpriteRenderer;
//	var playerSounds : playerSoundsScript;
//	var soundEffectsObject : GameObject;
	var soundEffects : soundEffectsScript;
	public var speachBubble : GameObject;
	public var joystick : GameObject;
	public var sortingOrder = 1;

	function Start () {
		 playerMovement = GetComponent(playerMovementScript);
		 spriteRenderer = GetComponent(SpriteRenderer);
//		 playerSounds = GetComponent(playerSoundsScript);
//		 soundEffects = soundEffectsObject.GetComponent(soundEffectsScript);

		 playerParticles = GetComponent(playerParticlesScript);
		 GetComponent(SpriteRenderer).sprite = spriteRight;
//		 joystick = GameObject.Find("joyStick").GetComponent(joystickScript);
		 spriteRenderer.sortingOrder = sortingOrder;
	}



	function Jump () {
		spriteRenderer.sprite = spriteJump;
		speachBubble.GetComponent(speachBubbleScript).GoodComment();
		playerParticles.PlayDownHill(false);
		soundEffects.Jump();
	}

	function Land () {
		playerParticles.PlayDownHill(true);
	}

	function DirectionUpdate () {

//		Debug.Log("Direction Update Called");
//		Debug.Log ("isJumping: " + playerMovement.isJumping);
//		Debug.Log ("Sprite downhill:" + playerMovement.downhill);
//		Debug.Log ("status:" + playerMovement.playerStatus);
		
		if ( !playerMovement.isJumping ) {

			switch (playerMovement.playerStatus)  
			{
				case  playerMovement.Status.Down:
					spriteRenderer.sprite = spriteDown;
					joystick.GetComponent(joystickScript).PopOff();
					playerParticles.PlayDownHill(true);
					break;
				case  playerMovement.Status.Right:
					spriteRenderer.sprite = spriteRight;
//					playerSounds.Slide();
					soundEffects.Slide();
					playerParticles.Slide("right");
					break;
				case  playerMovement.Status.Left:
					spriteRenderer.sprite = spriteLeft;
					soundEffects.Slide();
					playerParticles.Slide("left");
					break;
				case  playerMovement.Status.DownRight:
					spriteRenderer.sprite = spriteDownRight;
					soundEffects.Carve();
					break;
				case  playerMovement.Status.DownLeft:
					spriteRenderer.sprite = spriteDownLeft;
					soundEffects.Carve();
					break;
				case  playerMovement.Status.Wrecked:
					spriteRenderer.sprite = spriteWrecked;
					joystick.GetComponent(joystickScript).PopOn();
					speachBubble.GetComponent(speachBubbleScript).BadComment();
					playerParticles.Wreck();
//					soundEffects.Wreck();
					break;	
			}
		}
		
	}

	function Update () {

		if (!playerMovement.isJumping)
			spriteRenderer.sortingOrder = sortingOrder;
		else 
			spriteRenderer.sortingOrder  = 101;
	}

}