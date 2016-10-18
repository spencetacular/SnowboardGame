#pragma strict

public var gameOver = false;
public var gameLength : int;

function Start () {
//	var score = GameObject.Find("Score").GetComponent(scoreScript).score;

}

function GameOver (time : int, score : int) {
	
}

function Update () {
	var secondsElapsed = Mathf.FloorToInt(Time.timeSinceLevelLoad);

	if (gameLength - secondsElapsed <= 0 && gameOver == false) {
		gameOver = true;
		var score = GameObject.Find("score").GetComponent(scoreScript).score;
		GameObject.Find("gameOverCanvas").GetComponent(GameOverScript).GameOver(score);
		GameObject.Find("player").GetComponent(playerMovementScript).gameOver = true;
		GetComponent(AudioSource).Play();

	}

}