#pragma strict

public var fade : GameObject;
public var blackBox : GameObject;
public var player : GameObject;
public var liftChairsFull : GameObject;
public var liftChairsEmpty : GameObject;
public var canvasAvatar : GameObject;
public var canvasInstructions : GameObject;
public var canvasPlaying : GameObject;
public var canvasGameOver : GameObject;
public var boyAvatar : boolean;
public var yetiMovement : yetiMovementScript;


function Start () {

	canvasInstructions.SetActive(false);
	canvasPlaying.SetActive(false);
	canvasGameOver.SetActive(false);
//	blackBox.SetActive(true);
	canvasAvatar.SetActive(true);
}

function AvatarMode () {
	canvasAvatar.SetActive(true);
}

function InstructionsMode () {
	canvasAvatar.SetActive(false);
	canvasInstructions.SetActive(true);
	
}

function GameMode () {
	canvasPlaying.SetActive(true);
	canvasInstructions.SetActive(false);
	GameObject.Find("avatar").GetComponent(avatarGame).SetAvatar(boyAvatar);
	GameObject.Find("player").GetComponent(playerSpritesScript).SetPlayerSprites(boyAvatar);
	GameObject.Find("speachBubble").GetComponent(speachBubbleScript).StartComment();
//	yetiMovement.Spawn();
	yetiMovement.SpawnDelay();
	player.GetComponent(playerMovementScript).paused = false;
	liftChairsFull.GetComponent(liftChairsScript).paused = false;
	liftChairsEmpty.GetComponent(liftChairsScript).paused = false;
	fade.GetComponent(Animator).SetTrigger("fadeUp");
}



function GameOverMode () {

	canvasGameOver.SetActive(true);
	var score = GameObject.Find("score").GetComponent(scoreScript).score;
	GameObject.Find("finalScore").GetComponent(UnityEngine.UI.Text).text = "FINAL SCORE: " + score;
	canvasPlaying.SetActive(false);
	GameObject.Find("topScores").GetComponent(topScoresScript).score = score;
	GameObject.Find("topScores").GetComponent(topScoresScript).GameOver(score);
	fade.GetComponent(Animator).SetTrigger("fadeOut");
}

function Update () {

}