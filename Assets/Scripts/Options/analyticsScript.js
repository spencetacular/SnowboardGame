#pragma strict

import UnityEngine.UI;

var ana : Text;

function Start () {

	if (PlayerPrefs.GetString("Log")) 
		ana.text = PlayerPrefs.GetString("Log");
}
