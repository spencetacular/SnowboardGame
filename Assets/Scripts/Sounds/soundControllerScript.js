#pragma strict

var music : boolean;
var soundEffects : boolean;

function Start () {
	music = false;
	soundEffects = false;
	DontDestroyOnLoad(this);
	Application.LoadLevel("StartScreen");
}

function Update () {

}