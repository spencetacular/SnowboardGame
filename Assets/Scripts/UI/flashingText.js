#pragma strict

var textObject : UnityEngine.UI.Text;
public var secondsBetweenFlash  = 1.0;
var flashTicker  = 0.0;
var visible = true;


function Start () {
	flashTicker = secondsBetweenFlash;
	textObject = GetComponent(UnityEngine.UI.Text);
}

function Update () {

	if (flashTicker >= 0) {
		flashTicker -= Time.deltaTime;
	} else {
		visible = !visible;
		flashTicker = secondsBetweenFlash;
	}

	if (visible) {
		textObject.enabled = true;
	} else {
		textObject.enabled = false;
	}

	
	// Debug.Log(Time.timeSinceLevelLoad);
	// Debug.Log(Mathf.FloorToInt(Time.timeSinceLevelLoad));

	// if (Mathf.FloorToInt(Time.timeSinceLevelLoad) % 2 == 0) {
	// 	textObject.enabled = false;
	// } else {
	// 	textObject.enabled = true;
	// }
}