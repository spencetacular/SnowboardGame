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
	var playerSounds : playerSoundsScript;
//	var downArrow : popUpsScript;
	public var sortingOrder = 1;

	function Start () {
		 playerMovement = GetComponent(playerMovementScript);
		 spriteRenderer = GetComponent(SpriteRenderer);
		 playerSounds = GetComponent(playerSoundsScript);
		 playerParticles = GetComponent(playerParticlesScript);
		 GetComponent(SpriteRenderer).sprite = spriteRight;
//		 downArrow = GameObject.Find("downArrow").GetComponent(popUpsScript);
		 spriteRenderer.sortingOrder = sortingOrder;
	}



	function Jump () {
		spriteRenderer.sprite = spriteJump;
		playerParticles.PlayDownHill(false);
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
//					downArrow.PopUpOff();
					playerParticles.PlayDownHill(true);
					break;
				case  playerMovement.Status.Right:
					spriteRenderer.sprite = spriteRight;
					playerSounds.Slide();
					playerParticles.Slide("right");
					break;
				case  playerMovement.Status.Left:
					spriteRenderer.sprite = spriteLeft;
					playerSounds.Slide();
					playerParticles.Slide("left");
					break;
				case  playerMovement.Status.DownRight:
					spriteRenderer.sprite = spriteDownRight;
					playerSounds.Carve();
					break;
				case  playerMovement.Status.DownLeft:
					spriteRenderer.sprite = spriteDownLeft;
					playerSounds.Carve();
					break;
				case  playerMovement.Status.Wrecked:
					spriteRenderer.sprite = spriteWrecked;
//					downArrow.PopUp();
					playerParticles.Wreck();
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