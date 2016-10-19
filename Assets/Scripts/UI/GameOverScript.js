#pragma strict



function Start () {
//	GetComponent(Canvas).enabled = true;
//	initials = GetComponent(UnityEngine.UI.Text);
	

}

function GameOver (score : int) {
	GetComponent(Canvas).enabled = true;
	GameObject.Find("finalScore").GetComponent(UnityEngine.UI.Text).text = "Final Score: " + score;
	
}

function EnterInitails () {

}

function Update () {

}