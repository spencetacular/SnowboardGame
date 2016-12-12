#pragma strict

import UnityEngine.UI;

var textObj : Text;
var minutes : int;
var seconds : int;
var totalSeconds : int;
var paused  = true;

var elapsedTime : int;

function Start () {

}

function StartClock () {
	minutes = 0;
	seconds = 0;
	totalSeconds = 0;
	paused = false;
}

function Update () {
	if (paused) {
		elapsedTime  = Mathf.FloorToInt(Time.timeSinceLevelLoad);
//		Debug.Log("elapsedTime: " + elapsedTime);
	} else {
		totalSeconds = Mathf.FloorToInt(Time.timeSinceLevelLoad) - elapsedTime;
//		Debug.Log("totalSeconds: " + totalSeconds);
		minutes = totalSeconds / 60;
		seconds = totalSeconds - minutes * 60;
		var secondsStr;
		var minutesStr;
		if (seconds < 10)
			secondsStr = "0" + seconds.ToString();
		else 
			secondsStr = seconds.ToString();
		
		if (minutes < 10)
			minutesStr = "0" + minutes.ToString();
		else 
			minutesStr = minutes.ToString();

		textObj.text  =  minutesStr + ":" + secondsStr;
	}
}