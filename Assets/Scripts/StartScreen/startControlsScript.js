#pragma strict

var playPressed = false;
public var levelToLoad : String;

function Start () {
	DontDestroyOnLoad(this);

}

function Update () {

	if (Input.GetKeyDown ("space") && playPressed == false) {
		GetComponent(AudioSource).Play();
		playPressed = true;
		Application.LoadLevel(levelToLoad);
	}

	if (playPressed == true && GetComponent(AudioSource).isPlaying == false)
		Destroy(this);		
}