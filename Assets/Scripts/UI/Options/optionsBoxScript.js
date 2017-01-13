#pragma strict

public var myDevice : device;
 
function Start () {

	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad)
		GetComponent(UnityEngine.UI.Image).transform.localScale = new Vector3(2.0, 2.0, 2.0);
}