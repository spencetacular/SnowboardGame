#pragma strict

var textObject : UnityEngine.UI.Text;
public var secondsBetweenFlash  = 1.0;
var flashTicker  = 0.0;
var visible = true;

function Start () {
	flashTicker = secondsBetweenFlash;
	textObject = GetComponent(UnityEngine.UI.Text);
}

function Update () {

	if (flashTicker >= 0) {
		flashTicker -= Time.deltaTime;
	} else {
		visible = !visible;
		flashTicker = secondsBetweenFlash;
	}

	if (visible) 
		textObject.enabled = true;
	else 
		textObject.enabled = false;
}