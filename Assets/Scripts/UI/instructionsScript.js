#pragma strict

var soundEffects : soundEffectsScript;
public var swipe : swipeScript;
public var myDevice : device;

function Awake () {
	myDevice = new device();
}

function Update () {



	if (swipe.Swipe() == "enter") {

		if (myDevice.mobile) {
			GameObject.Find("levelManager").GetComponent(levelManagerScript).fingerGuesturesMode();
		} else {
			GameObject.Find("levelManager").GetComponent(levelManagerScript).AvatarMode();
		}


		soundEffects.Select();
			
	}
}