#pragma strict

public var music : boolean;
public var soundFX : boolean;

public var myDevice : device;

function Start () {
//	music = false;
//	soundFX = false;
	myDevice = new device();

	var levelToLoad = "StartScreen";
	if (myDevice.mobile) {
		levelToLoad = "SuperTopSecret";
	}
	DontDestroyOnLoad(this);
	Application.LoadLevel(levelToLoad);
}

function Update () {

}