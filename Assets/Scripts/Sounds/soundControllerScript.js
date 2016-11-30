#pragma strict

public var music : boolean;
public var soundFX : boolean;

function Start () {
//	music = false;
//	soundFX = false;
	DontDestroyOnLoad(this);
	Application.LoadLevel("StartScreen");
}

function Update () {

}