#pragma strict
public class playerSpritesScript extends MonoBehaviour {
	

	public var boySprites : Sprite[];
	public var girlSprites : Sprite[];
	public var playerSprites : Sprite[];

	var playerMovement : playerMovementScript;
	var playerParticles : playerParticlesScript;
	var spriteRenderer : SpriteRenderer;
	var soundEffects : soundEffectsScript;
	public var speachBubble : GameObject;
	public var joystick : GameObject;
	public var sortingOrder = 1;
	private var playerShadow : SpriteRenderer;

	function Start () {
		 playerMovement = GetComponent(playerMovementScript);
		 spriteRenderer = GetComponent(SpriteRenderer);
		 playerParticles = GetComponent(playerParticlesScript);
		 spriteRenderer.sprite = playerSprites[1];
		 spriteRenderer.sortingOrder = sortingOrder;
		 playerShadow  = GameObject.Find("shadow").GetComponent(SpriteRenderer);

		 playerSprites = boySprites;
	}

	function SetPlayerSprites ( boy : boolean) {
		if (boy)
			 playerSprites = boySprites;
		else
			 playerSprites = girlSprites;
		
		DirectionUpdate();
	}



	function Jump () {
		spriteRenderer.sprite = playerSprites[6];
		speachBubble.GetComponent(speachBubbleScript).GoodComment();
		playerParticles.PlayDownHill(false);
		soundEffects.Jump();
	}

	function Land () {
		playerParticles.PlayDownHill(true);
	}

	function DirectionUpdate () {
		
		if ( !playerMovement.isJumping ) {

			switch (playerMovement.playerStatus)  
			{
				case  playerMovement.Status.Down:
					spriteRenderer.sprite = playerSprites[0];
					joystick.GetComponent(joystickScript).PopOff();
					playerParticles.PlayDownHill(true);
					playerShadow.enabled = true;
					break;
				case  playerMovement.Status.Right:
					spriteRenderer.sprite = playerSprites[1];
					soundEffects.Slide();
					playerParticles.Slide("right");
					break;
				case  playerMovement.Status.Left:
					spriteRenderer.sprite = playerSprites[2];
					soundEffects.Slide();
					playerParticles.Slide("left");
					break;
				case  playerMovement.Status.DownRight:
					spriteRenderer.sprite = playerSprites[3];
					soundEffects.Carve1();
					break;
				case  playerMovement.Status.DownLeft:
					spriteRenderer.sprite = playerSprites[4];
					soundEffects.Carve1();
					break;
				case  playerMovement.Status.Wrecked:
					spriteRenderer.sprite = playerSprites[5];
					joystick.GetComponent(joystickScript).PopOn();
					speachBubble.GetComponent(speachBubbleScript).BadComment();
					playerShadow.enabled = false;
					playerParticles.Wreck();
					break;	
			}
		}
		
	}

	function Update () {

		if (!playerMovement.isJumping) {
			spriteRenderer.sortingOrder = sortingOrder;
			playerShadow.sortingOrder = sortingOrder -1;
		}

		else {
			spriteRenderer.sortingOrder  = 101;
			playerShadow.sortingOrder = 100;
			}
		
	}



}