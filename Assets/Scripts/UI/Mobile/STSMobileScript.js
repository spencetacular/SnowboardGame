#pragma strict

public var loadingBar : loadingBarScript;
public var myDevice : device;

function Start () {

	myDevice = new device();

	if (myDevice.mobile) 
		loadingBar.levelToLoad = "StartScreen";
	else 
		loadingBar.levelToLoad = "Level01";
}
