#pragma strict

public class deviceScript extends MonoBehaviour{

	public var mobile : boolean;
	public var ipad : boolean;

	function Start () {

		mobile = false;

		 #if UNITY_IPHONE || UNITY_ANDROID
		 	mobile = true;
		 #endif

		 Debug.Log(mobile);
	}

	function Update () {
	 Debug.Log(mobile);
	}

}