#pragma strict

import UnityEngine.UI;

private var avatarImage : Image;
public var borderImage : Image;

function Awake () {

	avatarImage = GetComponent(Image);
}

function Select () {
	avatarImage.color = Color.white;
	borderImage.enabled = true;
}

function DeSelect () {
	avatarImage.color = Color.gray;
	borderImage.enabled = false;
}
