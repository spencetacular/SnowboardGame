#pragma strict


import UnityEngine.UI;

var image : Image;
var anim : Animator;

function Start () {

	image = GetComponent(Image);
	anim = GetComponent(Animator);
	image.enabled = false;
}

function PopOn () {
	image.enabled = true;
	anim.SetTrigger("wrecked");

}

function PopOff () {
	image.enabled = false;
}



function Update () {

}