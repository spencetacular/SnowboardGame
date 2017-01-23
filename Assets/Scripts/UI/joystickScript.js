#pragma strict


import UnityEngine.UI;

public var joystickImage : Image;
public var joystickAnim : Animator;
public var mobileBox : GameObject;
//public var mobileFinger : Image;
public var secondsBetweenFlash  = 1.0;

var myDevice : device;

function Start () {
	myDevice = new device();

//	joystickImage = GetComponent(Image);
//	joystickAnim = GetComponent(Animator);
	joystickImage.enabled = false;
	mobileBox.SetActive(false);
//	mobileBox.enabled = false;
//	mobileFinger.enabled = false;
}

function PopOn () {	
	if (!myDevice.mobile) {
		joystickImage.enabled = true;
		joystickAnim.SetTrigger("wrecked");
	} else {
		mobileBox.SetActive(true);
//		mobileFinger.enabled = true;
//		FingerFlash();
	}

}

function PopOff () {
	if (!myDevice.mobile) {
		joystickImage.enabled = false;
	} else {
		mobileBox.SetActive(false);
//		mobileFinger.enabled = false;
	}
}

//function FingerFlash () {
//	mobileFinger.enabled = true;
//	Invoke ("FingerOff", secondsBetweenFlash/2.0);
//}
//function FingerOff () {
//	mobileFinger.enabled = false;
//	Invoke ("FingerFlash", secondsBetweenFlash/2.0);
//}

function Update () {

}