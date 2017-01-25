#pragma strict

var myDevice : device;
public var scale : Vector3;

function Start () {

	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad)
		this.GetComponent(RectTransform).localScale = scale;
}

