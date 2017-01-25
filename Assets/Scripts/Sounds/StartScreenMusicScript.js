#pragma strict

var soundController : soundControllerScript;

function Start () {

	if (GameObject.Find("soundController")) {
		soundController = GameObject.Find("soundController").GetComponent(soundControllerScript);

		if (soundController) {
			if (soundController.music) {
				soundController.leaderBoardMusic.Stop();
				soundController.backgroundMusic.Play();
			}
		}
	}
}
