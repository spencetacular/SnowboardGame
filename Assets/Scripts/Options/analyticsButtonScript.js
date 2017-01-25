#pragma strict

import UnityEngine.UI;

var anaBar : GameObject;
var anaText : Text;

function Show () {
	anaBar.SetActive(true);
}

//Development
function Y () {
	PlayerPrefs.SetInt("Yeti", 1);
}

function Delete () {
	PlayerPrefs.DeleteKey("Log");
	anaText.text = "";
}
