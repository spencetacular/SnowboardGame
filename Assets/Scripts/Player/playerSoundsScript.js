#pragma strict

 public var jumpAudio : AudioSource;
 public var wreckAudio: AudioSource;
 public var treeAudio: AudioSource;
 public var carveAuido: AudioSource;
 public var slideAudio: AudioSource;

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

function Carve() {
	carveAuido.Play();	
}

function Slide() {
	slideAudio.Play();
}

function Update () {
	
	if (carveAuido.time >= 0.7)
		carveAuido.Stop();	 
}
