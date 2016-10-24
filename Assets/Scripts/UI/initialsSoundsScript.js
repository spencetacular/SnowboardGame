#pragma strict

public var changeAudio : AudioSource;
public var initialSelectAudio: AudioSource;


function Start () {

}

function Change () {
	changeAudio.Play();
}

function Select() {
	initialSelectAudio.Play();
}

function Update () {

}