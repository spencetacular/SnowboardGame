#pragma strict

import UnityEngine.UI;

var anaBar : GameObject;
var anaText : Text;


function Start () {

}

function Show () {
	anaBar.SetActive(true);

}


function Hide () {
//	anaBar.enabled = false;
}

function Delete () {
	PlayerPrefs.DeleteKey("Log");
	anaText.text = "";
}
function Update () {

}