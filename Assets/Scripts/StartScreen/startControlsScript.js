#pragma strict

var playPressed = false;
var startScreenName : String;

function Start () {
	DontDestroyOnLoad(this);

}

function Update () {

	if (Input.GetKeyDown ("space") && playPressed == false) {
		GetComponent(AudioSource).Play();
		playPressed = true;
		Application.LoadLevel("Level01");

	}

	if (playPressed == true && GetComponent(AudioSource).isPlaying == false)
		Destroy(this);		
}