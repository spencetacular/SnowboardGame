#pragma strict

import UnityEngine.UI;

public var meterLoadTime = 2.0;
public var meterTicker = 0.0;

public var levelToLoad : String;

//public var playerMovement : playerMovementScript;
public var meterBars : Image[];

function Start () {
//	meterTicker = meterLoadTime;
	meterBars = transform.GetComponentsInChildren.<Image>();

	for (m in meterBars) {
		m.enabled = false; 
	}

}

function Update () {

	meterTicker += Time.deltaTime;
	var percent =  meterTicker / meterLoadTime;
	var numActive : int;
	numActive = percent *  meterBars.length - 1;

	for (var i = 0; i <  meterBars.length; i++) {
		if (i <= numActive)
			meterBars[i].enabled = true;
		else
			meterBars[i].enabled = false;
	}


	if (meterTicker >= meterLoadTime) {
		Application.LoadLevel(levelToLoad);
	}

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2")) {
		Application.LoadLevel("Level01");
	}

}