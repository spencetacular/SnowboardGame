#pragma strict

var invulnerable = false;
public var invulnerableTime : float;
public var anim : Animator;

function Start () {

}

function Invulnerable () {
	invulnerable = true;
	Invoke ("Vulnerable", invulnerableTime);
	anim.SetTrigger("invuln");
}

function Vulnerable () {
	invulnerable = false;
	anim.SetTrigger("vuln");
}

function Update () {

}