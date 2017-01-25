#pragma strict

import UnityEngine.UI;

public var myDevice : device;
public var bottomBar : Image; 

function Start () {

	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad) {
		bottomBar.enabled = false;
	}
}

