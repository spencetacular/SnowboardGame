#pragma strict

public class device {

	var mobile : boolean;
	var iPad : boolean;

	public function device () {

		mobile = false;
		iPad = false;

		  #if UNITY_IPHONE || UNITY_ANDROID
		 	mobile = true;
		 	var screenRatio =   Mathf.Round( (parseFloat(Screen.height) / parseFloat(Screen.width)) * 100);
		 	if (screenRatio == 75) {
		 		iPad = true;
		 	}
		 #endif
	}
}