#pragma strict

public var fade : GameObject;
public var player : GameObject;
public var liftChairsFull : GameObject;
public var liftChairsEmpty : GameObject;
public var canvasAvatar : GameObject;
public var canvasBlackBox : GameObject;
public var canvasInstructions : GameObject;
public var canvasFingerGestures : GameObject;
public var canvasPlaying : GameObject;
public var canvasGameOver : GameObject;
public var boyAvatar : boolean;
public var boyPanel : GameObject;
public var girlPanel : GameObject;
public var yetiMovement : yetiMovementScript;
public var roosterMovement : roosterMovementScript;
public var playerLives : playerLivesScript;
public var time : timeScript;
public var topScores : topScoresScript;
public var score : scoreScript;


function Start () {

	
	canvasPlaying.SetActive(false);
	canvasGameOver.SetActive(false);
	canvasAvatar.SetActive(false);
	canvasFingerGestures.SetActive(false);
	canvasInstructions.SetActive(true);
//	canvasBlackBox.SetActive(true);

}

function InstructionsMode () {
	canvasInstructions.SetActive(true);
	
}

function fingerGuesturesMode () {
	canvasInstructions.SetActive(false);
	canvasFingerGestures.SetActive(true);
}

function AvatarMode () {
	canvasInstructions.SetActive(false);
	canvasFingerGestures.SetActive(false);
	canvasAvatar.SetActive(true);
}


function GameMode () {
	canvasAvatar.SetActive(false);
	canvasPlaying.SetActive(true);
	GameObject.Find("avatar").GetComponent(avatarGame).SetAvatar(boyAvatar);
	GameObject.Find("obstacles1").GetComponent(obstacleGeneratorScript).InitialSpawn();
	GameObject.Find("obstacles2").GetComponent(obstacleGeneratorScript).InitialSpawn();
	player.GetComponent(playerMovementScript).swipe.gamePlayControls = true;
	playerLives.SetLives(boyAvatar);
	if (boyAvatar)
		girlPanel.active = false;
	else
		boyPanel.active = false;
	player.GetComponent(playerSpritesScript).SetPlayerSprites(boyAvatar);
	GameObject.Find("speachBubble").GetComponent(speachBubbleScript).StartComment();
	yetiMovement.SpawnDelay();
	roosterMovement.DeSpawn();
	player.GetComponent(playerMovementScript).paused = false;
	liftChairsFull.GetComponent(liftChairsScript).paused = false;
	liftChairsEmpty.GetComponent(liftChairsScript).paused = false;
	fade.GetComponent(Animator).SetTrigger("fadeUp");
	time.StartClock();

}



function GameOverMode () {
	GameObject.Find("LiftChairsFull").GetComponent(liftChairsScript).paused = true;
	GameObject.Find("LiftChairsEmpty").GetComponent(liftChairsScript).paused = true;
	player.GetComponent(playerMovementScript).swipe.gamePlayControls = false;
	player.GetComponent(playerMovementScript).paused = true;
	fade.GetComponent(Animator).SetTrigger("fadeOut");
	Invoke("TopScoresMode", 2);
	Invoke ("LoadStartScreen", 300);


}

function TopScoresMode () {
	yetiMovement.paused = true;
	roosterMovement.paused = true;
	canvasGameOver.SetActive(true);
//	var score = GameObject.Find("score").GetComponent(scoreScript).score;
	canvasPlaying.SetActive(false);
	topScores.score = score.score;
	topScores.GameOver(score.score);

//	DEVELOPMENT **********************************
	topScores.LogScore(score.score, time.totalSeconds);
	PlayerPrefs.SetInt("Yeti", 0);
}

function LoadStartScreen () {
	Application.LoadLevel("StartScreen");
}

function Update () {

}