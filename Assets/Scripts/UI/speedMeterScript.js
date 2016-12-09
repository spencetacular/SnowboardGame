#pragma strict

import UnityEngine.UI;

public var playerMovement : playerMovementScript;
public var meterBars : Image[];

function Start () {

	meterBars = transform.GetComponentsInChildren.<Image>();

	for (m in meterBars) {
		m.enabled = false; 
	}

}

function Update () {
	var numActive : int;
	numActive = playerMovement.speedPercent *  meterBars.length - 1;

	for (var i = 0; i <  meterBars.length; i++) {
		if (i <= numActive)
			meterBars[i].enabled = true;
		else
			meterBars[i].enabled = false;
	}

}