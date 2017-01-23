#pragma strict

import UnityEngine.UI;

public var boy : avatarScript;
public var girl : avatarScript;
private var selected : avatarScript;
public var soundEffects : soundEffectsScript;
public var swipeAvatar : swipeAvatarScript;
//public var swipe : swipeScript;

function Start () {
	selected = boy;
	boy.Select();
	girl.DeSelect();		
}

function Update () {

	if (swipeAvatar.Swipe() == "right") {

		if (selected == boy) {
			boy.DeSelect();
			girl.Select();
			selected = girl;
			soundEffects.Scroll();	
		}
	}

	if (swipeAvatar.Swipe() == "left") {
		if (selected == girl) {
				girl.DeSelect();
				boy.Select();
				selected = boy;	
				soundEffects.Scroll();
		}
	}

	if (swipeAvatar.Swipe() == "enter") {

		var boyAvatar = true;
		if (selected == girl)
			boyAvatar = false;

		GameObject.Find("levelManager").GetComponent(levelManagerScript).boyAvatar = boyAvatar;
		GameObject.Find("levelManager").GetComponent(levelManagerScript).GameMode();
		soundEffects.Select();
	}
}