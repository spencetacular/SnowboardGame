#pragma strict

public var textObject : UnityEngine.UI.Text;
public var secondsBetweenFlash  = 1.0;
var flashTicker  = 0.0;
var visible = true;
var doesFlash = true;


function Start () {
	flashTicker = secondsBetweenFlash;
	textObject = GetComponent(UnityEngine.UI.Text);
}

function Flashing (on : boolean ) {
	if (on) {
		doesFlash = true;
		flashTicker = secondsBetweenFlash;

	} else {
		textObject.enabled = true;
		doesFlash = false;
	}
}

function Update () {

	if (doesFlash) {
		if (flashTicker >= 0) {
			flashTicker -= Time.deltaTime;
		} else {
			visible = !visible;
			flashTicker = secondsBetweenFlash;
		}
		textObject.enabled = visible ? true : false; 
	}

//	if (visible) 
//		textObject.enabled = true;
//	else 
//		textObject.enabled = false;

//	visible ? textObject.enabled = true : textObject.enabled = false;
	
}