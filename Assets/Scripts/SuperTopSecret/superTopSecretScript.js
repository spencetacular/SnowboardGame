#pragma strict

public var level : String;
public var loadDelay : int;

function Start () {

	Invoke("LoadLevel", loadDelay);

}

function LoadLevel () {
	Application.LoadLevel(level);
}

function Update () {

}