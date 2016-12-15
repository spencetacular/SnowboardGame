#pragma strict


public var device : deviceScript;

function Start () {
	device = new deviceScript();
	Debug.Log(device.mobile);
//	Debug.Log(iOS.Device);


//	if(Application.platform == RuntimePlatform.IPhonePlayer) {
//		Debug.Log("ipone");
//	}

//	var mobile = false;
//
//	 #if UNITY_IPHONE || UNITY_ANDROID
//	 	mobile = true;
//	 	Debug.Log(Screen.height);
//	 	Debug.Log(Screen.width);
//	 	var screenRatio : int;
//	 	screenRatio =   Mathf.Round( (parseFloat(Screen.height) / parseFloat(Screen.width)) * 100);
////		screenRatio = 100.0/ 573.0;
//	 	Debug.Log(screenRatio);
//	 	GetComponent(UnityEngine.UI.Image).transform.localScale = new Vector3(1.5, 1.5, 1.5);
//	 #endif

//	 Debug.Log("Mobile: " + mobile);
}

function Update () {

}