#pragma strict

public var music : boolean;
public var soundFX : boolean;
public var backgroundMusic : AudioSource;
public var leaderBoardMusic : AudioSource;
public var myDevice : device;

function Start () {

	myDevice = new device();
	var levelToLoad = "StartScreen";

	if (myDevice.mobile)
		levelToLoad = "SuperTopSecret";

	DontDestroyOnLoad(this);
	Application.LoadLevel(levelToLoad);
}
