#pragma strict


import UnityEngine.UI;

public var joystickImage : Image;
public var joystickAnim : Animator;
public var mobileBox : GameObject;
public var playerLives : playerLivesScript;
var myDevice : device;

function Start () {
	myDevice = new device();

	joystickImage.enabled = false;
	mobileBox.SetActive(false);

}

function PopOn () {	
	if (playerLives.livesLeft > 1) {
		if (!myDevice.mobile) {
			joystickImage.enabled = true;
			joystickAnim.SetTrigger("wrecked");
		} else {
			mobileBox.SetActive(true);

		}
	}

}

function PopOff () {
	if (!myDevice.mobile) {
		joystickImage.enabled = false;
	} else {
		mobileBox.SetActive(false);

	}
}

function Update () {

}