#pragma strict

var image : UnityEngine.UI.Image;
public var secondsBetweenFlash  = 1.0;
var flashTicker  = 0.0;
public var popUpSeconds = 3.0;
public var popUpTicker = 0.0;
var visible = false;

function Start () {
	flashTicker = secondsBetweenFlash;
	image = GetComponent(UnityEngine.UI.Image);
	visible = false;
	image.enabled = false;
}

function Flash () {

	if (flashTicker >= 0) {
		flashTicker -= Time.deltaTime;
	} else {
		visible = !visible;
		flashTicker = secondsBetweenFlash;
	}

	if (visible)
		image.enabled = true;
	else 
		image.enabled = false;
	
}

function Update () {
	if (popUpTicker >=0) {
		popUpTicker -= Time.deltaTime;
		Flash ();
	} else {
		visible = false;
		image.enabled = false;

	}
}