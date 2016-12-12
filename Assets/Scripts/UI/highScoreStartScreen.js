#pragma strict

import UnityEngine.UI;
var highScore : Text;

function Start () {

	if ( PlayerPrefs.GetInt("0Score")) {
		var score = PlayerPrefs.GetInt("0Score");
		var s = score.ToString().Format("{0:#,###0}",score);
		var ini = PlayerPrefs.GetString("0Ini");
		highScore.text = "HI-SCORE " + ini + " " + s;
	} else {
		highScore.text = "";
	}
}