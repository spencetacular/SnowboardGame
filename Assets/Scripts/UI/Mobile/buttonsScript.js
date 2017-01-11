#pragma strict

import UnityEngine.UI;

public var swipe : swipeScript;
public var arrowUp : Sprite;
public var arrowDown : Sprite;
public var buttonUp : Sprite;
public var buttonDown : Sprite;

public var arrowRight : Image;
public var arrowLeft : Image;
public var button : Image;
public var optionsScreen = false;
var downTime = 0.20;




function Start () {

	arrowRight.sprite = arrowUp;
	arrowLeft.sprite = arrowUp;
	button.sprite = buttonUp;

	if (optionsScreen) {
		arrowRight.GetComponent(RectTransform).localRotation = new  Quaternion.Euler(0.0, 0.0, 90.0);
		arrowLeft.GetComponent(RectTransform).localRotation = new  Quaternion.Euler(0.0, 0.0, -90.0);
	}
}

function PressRight () {
	arrowRight.sprite = arrowDown;
	Invoke("ArrowUp",downTime);
}

function PressLeft () {
	arrowLeft.sprite = arrowDown;
	Invoke("ArrowUp",downTime);
}

function PressButton () {
	button.sprite = buttonDown;
	Invoke("ButtonUp",downTime);
}

function ArrowUp () {
	arrowRight.sprite = arrowUp;
	arrowLeft.sprite = arrowUp;
}

function ButtonUp () {
	button.sprite = buttonUp;
}

function Update () {

	if (swipe.Swipe() == "right") {
		PressRight ();
	}
	if (swipe.Swipe() == "left") {
		PressLeft ();
	}
	if (swipe.Swipe() == "enter") {
		PressButton ();
	}
		

}