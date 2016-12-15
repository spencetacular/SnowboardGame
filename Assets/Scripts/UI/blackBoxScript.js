#pragma strict

import UnityEngine.UI;

public var myDevice : device;
public var leftBar : Image;
public var rightBar : Image;
public var bottomBar : Image; 

function Start () {

	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad) {
		leftBar.enabled = false;
		rightBar.enabled = false;
		bottomBar.enabled = false;
	}
}

function Update () {

}