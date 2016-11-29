#pragma strict

public var music : boolean;
public var soundFX : boolean;

function Start () {
	music = true;
	soundFX = true;
	DontDestroyOnLoad(this);
	Application.LoadLevel("StartScreen");
}

function Update () {

}