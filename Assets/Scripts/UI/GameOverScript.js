#pragma strict


//var initials : UnityEngine.UI.Text;
//var topScores = new List.<userScoreScript>();
//var score : int;


function Start () {
//	initials  = GameObject.Find("initials").GetComponent(UnityEngine.UI.Text);
//	topScores = GameObject.Find("topScores").GetComponent(topScoresScript).userScores;
//	GetComponent(Canvas).enabled = true;
//	initials = GetComponent(UnityEngine.UI.Text);
	

}

//function CompareScore (sore : int) {
//	for (u in users) {
//		if (score >= u.score)
//	}
//	
//}

function GameOver (score : int) {
	GetComponent(Canvas).enabled = true;
	GameObject.Find("finalScore").GetComponent(UnityEngine.UI.Text).text = "Final Score: " + score;
	
}

function EnterInitails () {

}

function Update () {

}