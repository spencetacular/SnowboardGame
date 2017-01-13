#pragma strict

var myDevice : device;

public var time : GameObject;

function Start () {

	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad) {
		time.SetActive(false);
	}

}
