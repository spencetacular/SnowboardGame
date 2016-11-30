#pragma strict

import UnityEngine.UI;

public var boyImage : Sprite;
public var girlImage : Sprite;
public var name : Text;


function Start () {
	Girl();
}

function Girl () {
	GetComponent(Image).sprite = girlImage;
}

function Update () {

}