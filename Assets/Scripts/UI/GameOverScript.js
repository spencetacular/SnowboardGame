#pragma strict

var restartText : GameObject;
var startControls : GameObject;
//var restartActive = false;


//var initials : UnityEngine.UI.Text;
//var topScores = new List.<userScoreScript>();
//var score : int;


function Start () {
//	initials  = GameObject.Find("initials").GetComponent(UnityEngine.UI.Text);
//	topScores = GameObject.Find("topScores").GetComponent(topScoresScript).userScores;
//	GetComponent(Canvas).enabled = true;
//	initials = GetComponent(UnityEngine.UI.Text);
	restartText.SetActive(false);
	startControls.SetActive(false);
	

}

//function CompareScore (sore : int) {
//	for (u in users) {
//		if (score >= u.score)
//	}
//	
//}

function GameOver () {
	GetComponent(Canvas).enabled = true;
	GameObject.Find("gamePlayingCanvas").GetComponent(Canvas).enabled = false;
	//		GameObject.Find("gameOverCanvas").GetComponent(GameOverScript).GameOver(score);
		GameObject.Find("player").GetComponent(playerMovementScript).gameOver = true;
		GetComponent(AudioSource).Play();
	var score = GameObject.Find("score").GetComponent(scoreScript).score;
	GameObject.Find("finalScore").GetComponent(UnityEngine.UI.Text).text = "Final Score: " + score;
//	GameObject.Find("initials").GetComponent(initialsScript).gameOver = true;
	GameObject.Find("topScores").GetComponent(topScoresScript).GameOver();
	
}

function PressStartToPlay() {
	restartText.SetActive(true);
	startControls.SetActive(true);
}



function Update () {
//	if (restartActive == true && Input.GetKeyDown ("space")) {
////		Application.Lo
//	}
	

}