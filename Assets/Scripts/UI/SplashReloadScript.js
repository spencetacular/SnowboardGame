#pragma strict

function Start () {
	Invoke("Reload", 35);

}

function Reload () {
	Application.LoadLevel("StartScreen");
}
