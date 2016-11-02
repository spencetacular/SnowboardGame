#pragma strict

var image : UnityEngine.UI.Image;
public var secondsBetweenFlash  = 1.0;
public var popUpSeconds = 3.0;
var visible = false;


function Start () {
	image = GetComponent(UnityEngine.UI.Image);
	image.enabled = false;
	InvokeRepeating("Flash", 0, secondsBetweenFlash);
}

function PopUp () {
	visible = true;
	Invoke("PopUpOff", popUpSeconds);
}
function PopUpOff () {
	visible  = false;
	image.enabled = false;
}

function Flash () {
	if (visible) 
		image.enabled =! image.enabled;
}

function Update () {

}