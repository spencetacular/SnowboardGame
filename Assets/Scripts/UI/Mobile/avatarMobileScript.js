#pragma strict

var myDevice : device;


function Start () {
	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad)
		GetComponent(UnityEngine.UI.Image).transform.localScale = new Vector3(1.5, 1.5, 1.5);
}

function Update () {

}