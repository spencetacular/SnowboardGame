#pragma strict

import UnityEngine.UI;

public var displayTime : float;
public var commentsBad : Sprite[];
public var goodComments : Sprite[];
public var startComments : Sprite[];
var bubble : Image;


function Start () {
	bubble = GetComponent(Image);
	Hide();
}

function BadComment () {
	bubble.enabled = true;
	var rand  = Random.Range( 0, commentsBad.Length);
	bubble.sprite = commentsBad[rand];
	Invoke ( "Hide", displayTime);
}

function GoodComment () {
	bubble.enabled = true;
	var rand  = Random.Range( 0, goodComments.Length);
	bubble.sprite = goodComments[rand];
	Invoke ( "Hide", displayTime);
}

function StartComment () {
	bubble.enabled = true;
	var rand  = Random.Range( 0, startComments.Length);
	bubble.sprite = startComments[rand];
	Invoke ( "Hide", displayTime);
}

function Hide () {
	bubble.enabled = false;
}
