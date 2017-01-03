var soundEffects : soundEffectsScript;
public var swipe : swipeScript;

function Update () {


	if (swipe.Swipe() == "enter") {

		GameObject.Find("levelManager").GetComponent(levelManagerScript).AvatarMode();
		soundEffects.Select();
			
	}
}