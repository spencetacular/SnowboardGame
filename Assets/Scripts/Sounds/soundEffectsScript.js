﻿#pragma strict

var soundController : soundControllerScript;


public var jumpAudio : AudioSource;
public var wreckAudio: AudioSource;
public var treeAudio: AudioSource;
public var carveAuido: AudioSource;
public var slideAudio: AudioSource;
public var selectAudio: AudioSource;
public var scrollAudio: AudioSource;
public var success : AudioSource;

var muted = false;

private var soundEffects : AudioSource[];

function Start () {

	soundEffects  = [jumpAudio, wreckAudio, treeAudio, carveAuido, slideAudio, selectAudio, scrollAudio, success];	

	if (GameObject.Find("soundController")) { 
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);

//		if (!soundController.soundFX) {
//			Mute(true);
//		}
	}




//	Mute ();
}

function Mute ( on : boolean) {
	for ( s in soundEffects ) 
		s.mute = on;
	


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

function Select () {
	selectAudio.Play();
}

function Scroll() {
	scrollAudio.Play();
}

function Success() {
	success.Play();
}

function Update () {
	
	if (carveAuido.time >= 0.7)
		carveAuido.Stop();	 
}
