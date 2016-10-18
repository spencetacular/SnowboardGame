#pragma strict

 public var jumpAudio : AudioSource;
 public var wreckAudio: AudioSource;
 public var treeAudio: AudioSource;


function Start () {

}

function Jump() {
	jumpAudio.Play();
}

function Wreck() {
	wreckAudio.Play();
}

function TreeFall() {
	treeAudio.Play();
}
function Update () {

}