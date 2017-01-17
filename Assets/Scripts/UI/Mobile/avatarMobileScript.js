﻿#pragma strict
import UnityEngine.UI;

var myDevice : device;
public var scale = 1.5;
var logoSmall : RectTransform;

function Start () {
	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad) {
		GetComponent(UnityEngine.UI.Image).transform.localScale = new Vector3(scale, scale, scale);
			if (logoSmall) { 
				logoSmall.localPosition = new Vector3(0.0, 160.0, 0.0);
				logoSmall.localScale = new Vector3(1.0, 1.0, 1.0);
			}
	}
}

function Update () {

}