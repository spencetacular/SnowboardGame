#pragma strict

import UnityEngine.UI;

private var avatarImage : Image;
public var isSelected  = false;
public var isBoy : boolean;

function Start () {

	avatarImage = GetComponent(Image);

	avatarImage.color = Color.white;

//	if (isBoy) {
//		GetComponent(RectTransform).localScale = new Vector3(-1.0, 1.0, 1.0);
//	}

}

function Select () {
	avatarImage.color = Color.white;
}

function DeSelect () {
	avatarImage.color = Color.gray;
}

function Update () {

}