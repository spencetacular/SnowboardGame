#pragma strict

var soundController : soundControllerScript;

public var soundEffectsObject : GameObject;

public var jumpAudio : AudioSource;
public var wreckAudio: AudioSource;
public var treeAudio: AudioSource;
public var carveAuido: AudioSource;
public var slideAudio: AudioSource;
public var selectAudio: AudioSource;
public var scrollAudio: AudioSource;
public var success : AudioSource;
public var whoose : AudioSource;
public var shine : AudioSource;

private var soundEffects : AudioSource[];

public var levelToLoad = "";
var loadPressed = false;

function Start () {

	soundEffects  = [jumpAudio, wreckAudio, treeAudio, carveAuido, slideAudio, selectAudio, scrollAudio, success];	

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


function Scroll() {
	scrollAudio.Play();
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
	selectAudio.Play();
}

function Load () {
	
//	loadedPressed = true;

	if (!loadPressed) {
			selectAudio.Play();
			loadPressed = true;
			Application.LoadLevel(levelToLoad);
		}
}

function Update () {

	if (carveAuido.time >= 0.7)
		carveAuido.Stop();	 

	if (loadPressed == true && selectAudio.isPlaying == false) {
		Debug.Log("DESTROY!");
		Destroy(soundEffectsObject);
	}
}

