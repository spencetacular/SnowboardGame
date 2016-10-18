#pragma strict

 public var jumpAudio : AudioSource;
 public var wreckAudio: AudioSource;


function Start () {

}

function Jump() {
	jumpAudio.Play();
}

function Wreck() {
	wreckAudio.Play();
}

function Update () {

}