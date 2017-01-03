#pragma strict

public var myDevice : device;
var mobile = false;

function Start () {
	myDevice = new device();

	 #if UNITY_IPHONE || UNITY_ANDROID
	 	mobile = true;
	 #endif

	if ( mobile ) {
		gameObject.SetActive(true);
		Debug.Log("Mobile");
	} else
		gameObject.SetActive(false);
		Debug.Log("Not Mobile");
	}

function Update () {

}