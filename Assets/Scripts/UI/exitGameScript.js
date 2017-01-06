#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKey ("escape")) {
//		Application.Quit();
		System.Diagnostics.Process.GetCurrentProcess().Kill();
	}
}