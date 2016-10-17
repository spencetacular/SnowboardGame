#pragma strict

public var gameOver = false;
public var gameLength : int;

function Start () {
//	var score = GameObject.Find("Score").GetComponent(scoreScript).score;

}

function GameOver (time : int, score : int) {
	
}

function Update () {
	gameLength -= Mathf.FloorToInt(Time.timeSinceLevelLoad);

	if (gameLength <=0) {
		gameOver = true;
		var score = GameObject.Find("Score").GetComponent(scoreScript).score;
		GameObject.Find("gameOverCanvas").GetComponent(GameOverScript).GameOver(score);

	}

}