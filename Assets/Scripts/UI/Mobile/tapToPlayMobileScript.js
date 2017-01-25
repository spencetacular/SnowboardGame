#pragma strict

var myDevice : device;

function Start () {

	myDevice = new device();

	if (myDevice.mobile) 
		GetComponent(UnityEngine.UI.Text).text = "TAP TO CONTINUE";
}
