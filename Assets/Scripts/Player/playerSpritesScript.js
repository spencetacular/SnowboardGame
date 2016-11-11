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
	public var playerBaseY : float;
	var playerSounds : playerSoundsScript;
	var downArrow : popUpsScript;
	public var sortingOrder = 1;
	public var jumping = false;

	function Start () {
		 playerMovement = GetComponent(playerMovementScript);
		 spriteRenderer = GetComponent(SpriteRenderer);
		 playerSounds = GetComponent(playerSoundsScript);
		 playerParticles = GetComponent(playerParticlesScript);
		 GetComponent(SpriteRenderer).sprite = spriteRight;
		 downArrow = GameObject.Find("downArrow").GetComponent(popUpsScript);
		 playerBaseY = this.transform.position.y + spriteRenderer.bounds.max.y;
		 spriteRenderer.sortingOrder = sortingOrder;
	}



	function Jump () {
		spriteRenderer.sprite = spriteJump;
		jumping = true;
		playerParticles.downhillPart.Stop();
	}

	function Land () {
		jumping = false;
		playerParticles.downhillPart.Play();
	}

	function DirectionUpdate () {

		
		if ( !playerMovement.isJumping ) {

			if (playerMovement.downhill)
				playerParticles.downhillPart.Play();

			switch (playerMovement.playerStatus)  
			{
				case  playerMovement.Status.Down:
					spriteRenderer.sprite = spriteDown;
					downArrow.PopUpOff();
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
					downArrow.PopUp();
					playerParticles.Wreck();
					break;	
			}
		}
		
	}

	function Update () {

		if (!jumping)
			spriteRenderer.sortingOrder = sortingOrder;
		else 
			spriteRenderer.sortingOrder  = 101;
	}

}