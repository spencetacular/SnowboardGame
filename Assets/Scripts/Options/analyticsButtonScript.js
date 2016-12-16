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

function Y () {
	PlayerPrefs.SetInt("Yeti", 1);
}

function Delete () {
	PlayerPrefs.DeleteKey("Log");
	anaText.text = "";
}
function Update () {

}