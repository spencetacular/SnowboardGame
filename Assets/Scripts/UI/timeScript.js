#pragma strict

var textObj : UnityEngine.UI.Text;
var minutes = 0;
var seconds = 0;
var totalSeconds = 0;

function Start () {

	textObj = GetComponent(UnityEngine.UI.Text);
}

function Update () {

	totalSeconds = Mathf.FloorToInt(Time.timeSinceLevelLoad);
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

	textObj.text  = "Time " + minutesStr + ":" + secondsStr;
}