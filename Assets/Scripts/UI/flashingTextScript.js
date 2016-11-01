#pragma strict

public var textObject : UnityEngine.UI.Text;
public var secondsBetweenFlash  = 1.0;
var doesFlash = true;
public var startDelay = 0.0;

function Start () {

	textObject = GetComponent(UnityEngine.UI.Text);
	textObject.enabled = false;
	Invoke("StartFlash", startDelay);

}

function StartFlash () {
	InvokeRepeating("Flash", 0, secondsBetweenFlash);
}

function Flashing (on : boolean ) {
	if (on) {
		doesFlash = true;

	} else {
		textObject.enabled = true;
		doesFlash = false;
	}
}

function Flash () {
	if (doesFlash) 
		textObject.enabled  =! textObject.enabled;
}

function Update () {

	
}