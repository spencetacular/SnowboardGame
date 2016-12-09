#pragma strict

public var fade : GameObject;
public var player : GameObject;
public var liftChairsFull : GameObject;
public var liftChairsEmpty : GameObject;
public var canvasAvatar : GameObject;
public var canvasBlackBox : GameObject;
public var canvasInstructions : GameObject;
public var canvasPlaying : GameObject;
public var canvasGameOver : GameObject;
public var boyAvatar : boolean;
public var boyPanel : GameObject;
public var girlPanel : GameObject;
public var yetiMovement : yetiMovementScript;
public var roosterMovement : roosterMovementScript;
public var playerLives : playerLivesScript;


function Start () {

	
	canvasPlaying.SetActive(false);
	canvasGameOver.SetActive(false);
	canvasAvatar.SetActive(false);
	canvasInstructions.SetActive(true);
	canvasBlackBox.SetActive(true);

}

function InstructionsMode () {
	canvasInstructions.SetActive(true);
	
}


function AvatarMode () {
	canvasInstructions.SetActive(false);
	canvasAvatar.SetActive(true);
}


function GameMode () {
	canvasAvatar.SetActive(false);
	canvasPlaying.SetActive(true);
	GameObject.Find("avatar").GetComponent(avatarGame).SetAvatar(boyAvatar);
	GameObject.Find("obstacles1").GetComponent(obstacleGeneratorScript).InitialSpawn();
	GameObject.Find("obstacles2").GetComponent(obstacleGeneratorScript).InitialSpawn();
	playerLives.SetLives(boyAvatar);
	if (boyAvatar)
		girlPanel.active = false;
	else
		boyPanel.active = false;
	player.GetComponent(playerSpritesScript).SetPlayerSprites(boyAvatar);
	GameObject.Find("speachBubble").GetComponent(speachBubbleScript).StartComment();
//	yetiMovement.Spawn();
	yetiMovement.SpawnDelay();
	roosterMovement.DeSpawn();
	player.GetComponent(playerMovementScript).paused = false;
	liftChairsFull.GetComponent(liftChairsScript).paused = false;
	liftChairsEmpty.GetComponent(liftChairsScript).paused = false;
	fade.GetComponent(Animator).SetTrigger("fadeUp");
}



function GameOverMode () {
	yetiMovement.paused = true;
	roosterMovement.paused = true;
	player.GetComponent(playerMovementScript).paused = true;
	canvasGameOver.SetActive(true);
	var score = GameObject.Find("score").GetComponent(scoreScript).score;
//	GameObject.Find("finalScore").GetComponent(UnityEngine.UI.Text).text = "FINAL SCORE: " + score;
	canvasPlaying.SetActive(false);
	GameObject.Find("topScoresScores").GetComponent(topScoresScript).score = score;
	GameObject.Find("topScoresScores").GetComponent(topScoresScript).GameOver(score);
	fade.GetComponent(Animator).SetTrigger("fadeOut");
}

function Update () {

}