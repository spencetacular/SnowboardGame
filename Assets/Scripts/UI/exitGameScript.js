#pragma strict

var resetTicker = 5.0;

function Start () {

	Cursor.visible = false;

}

function Update () {
	if (Input.GetKey ("escape")) {
		System.Diagnostics.Process.GetCurrentProcess().Kill();
	}

	if (Input.GetKey ("r")) {
		resetTicker -= Time.deltaTime;
		if (resetTicker <= 0.0) {
			PlayerPrefs.DeleteAll();
			Debug.Log("Top Scores Reset!");
		}
	} else {
		resetTicker = 5.0;
	}
}