#pragma strict

import UnityEngine.UI;

public var boyImage : Sprite;
public var girlImage : Sprite;
public var nameText : Text;


function Start () {
//	Girl();
}

function SetAvatar ( boy : boolean) {
	if (boy) {
		GetComponent(Image).sprite = boyImage;
		nameText.text = "Chaz";
	} else {
		GetComponent(Image).sprite = girlImage;
		nameText.text = "Nixie";
	}
}

