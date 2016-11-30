#pragma strict

import UnityEngine.UI;

public var boy : avatarScript;
public var girl : avatarScript;
private var selected : avatarScript;

public var soundEffects : soundEffectsScript;
//var avatars : Image[];
//var selected : Image;

function Start () {
//	selected = boy;
//	avatars = [boy, girl];
	selected = boy;
	boy.Select();
	girl.DeSelect();	
	
}

//function Switch () {
//	
//}

function Update () {

	if (Input.GetKeyDown ( "right" ) || Input.GetKeyDown ( "r" )){

			if (selected == boy) {
				boy.DeSelect();
				girl.Select();
				selected = girl;
				soundEffects.Scroll();	

			}
			
		}

	if (Input.GetKeyDown ("left") || Input.GetKeyDown ( "f" )){
		if (selected == girl) {
				girl.DeSelect();
				boy.Select();
				selected = boy;	
				soundEffects.Scroll();

		}
			
	}

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") ) {

		var boyAvatar = true;
		if (selected == girl)
			boyAvatar = false;

		GameObject.Find("levelManager").GetComponent(levelManagerScript).boyAvatar = boyAvatar;
		GameObject.Find("levelManager").GetComponent(levelManagerScript).InstructionsMode();

		soundEffects.Select();
		
	}

	


}