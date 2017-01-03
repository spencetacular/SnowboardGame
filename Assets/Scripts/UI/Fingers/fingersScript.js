#pragma strict

public var myDevice : device;

function Start () {
	myDevice = new device();

	if ( myDevice.mobile ) {
		this.enabled = true;
	} else
		this.enabled = false;
}

function Update () {

}