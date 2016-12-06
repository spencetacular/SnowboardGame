#pragma strict

var soundController : soundControllerScript;

public var soundEffectsObject : GameObject;

public var jump : AudioSource;
public var wreck: AudioSource;
public var tree: AudioSource;
public var carve: AudioSource;
public var slide: AudioSource;
public var select: AudioSource;
public var scroll: AudioSource;
public var success : AudioSource;
public var whoose : AudioSource;
public var shine : AudioSource;
public var roar : AudioSource;

private var soundEffects : AudioSource[];

public var levelToLoad = "";
var loadPressed = false;

function Start () {

	soundEffects  = [jump, wreck, tree, carve, slide, select, scroll, success];	

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

function Carve() {
	carve.Play();	
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

function Update () {

	if (carve.time >= 0.7)
		carve.Stop();	 

	if (loadPressed == true && select.isPlaying == false) {
		Debug.Log("DESTROY!");
		Destroy(soundEffectsObject);
	}
}

