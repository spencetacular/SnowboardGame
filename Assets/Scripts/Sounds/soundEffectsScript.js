#pragma strict

var soundController : soundControllerScript;

public var soundEffectsObject : GameObject;

public var jump : AudioSource;
public var wreck: AudioSource;
public var tree: AudioSource;
public var carve1: AudioSource;
public var carve2: AudioSource;

public var slide: AudioSource;
public var select: AudioSource;
public var scroll: AudioSource;
public var success : AudioSource;
public var whoose : AudioSource;
public var shine : AudioSource;
public var roar : AudioSource;
public var groan : AudioSource;
public var roosterCluck : AudioSource;
public var roosterCrow : AudioSource;

private var soundEffects : AudioSource[];

public var levelToLoad = "";
var loadPressed = false;

function Start () {

	soundEffects  = [jump, wreck, tree, carve1, carve2, slide, select, scroll, success, whoose, shine, roar, groan, roosterCluck, roosterCrow];	

	if (GameObject.Find("soundController")) { 
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);

		if (!soundController.soundFX) {
			Mute(true);
			Debug.Log("MUTE");
		}
	}

	DontDestroyOnLoad(this);
}

function Mute ( on : boolean) {
	for ( s in soundEffects ) 
		s.mute = on;
}

function Jump() {
	jump.Play();
}

function Wreck() {
	wreck.Play();
}

function TreeFall() {
	tree.Play();
}

function Carve1() {
	carve1.Play();	
}

function Carve2() {
	carve2.Play();	
}

function Slide() {
	slide.Play();
}


function Scroll() {
	scroll.Play();
}

function Success() {
	success.Play();
}

function Whoosh() {
	whoose.Play();
}

function Shine () {
	shine.Play();
}

function Select () {
	select.Play();
}

function Coin () {
	scroll.Play();
}

function Load () {
	
	if (!loadPressed) {
			select.Play();
			loadPressed = true;
			Application.LoadLevel(levelToLoad);
	}
}

function Roar () {
	roar.Play();
}

function Groan () {
	groan.Play();
}

function RoosterCluck () {
	roosterCluck.Play();
}

function RoosterCrow () {
	roosterCrow.Play();
}


function Update () {
 

	if (loadPressed == true && select.isPlaying == false) {
		Destroy(soundEffectsObject);
	}
}

