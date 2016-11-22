#pragma strict


public var fade : GameObject;
public var player : GameObject;
public var liftChairsFull : GameObject;
public var liftChairsEmpty : GameObject;
public var canvasAvatar : GameObject;
public var canvasInstructions : GameObject;
//private var canvases : GameObject[];


function Start () {
	
//	fade.GetComponent(Animator).SetTrigger("fadeUp");
//	fade.GetComponent(Animator).SetTrigger("fadeOut");

//	player.SetActive(false);
	canvasInstructions.SetActive(false);
	canvasAvatar.SetActive(true);


	
}

function AvatarMode () {
	
}

function InstructionsMode () {
	canvasAvatar.SetActive(false);
	canvasInstructions.SetActive(true);
	
}

function GameMode () {
	canvasInstructions.SetActive(false);
	player.GetComponent(playerMovementScript).paused = false;
	liftChairsFull.GetComponent(liftChairsScript).paused = false;
	liftChairsEmpty.GetComponent(liftChairsScript).paused = false;
	fade.GetComponent(Animator).SetTrigger("fadeUp");
}

function GameOverMode () {

	fade.GetComponent(Animator).SetTrigger("fadeOut");
}

function Update () {

}