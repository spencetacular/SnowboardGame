#pragma strict
	public class treeAnimationScript extends MonoBehaviour {

	var anim : Animator;

	function Start () {
		anim = GetComponent(Animator);
	}

	function Fall () {
		anim.SetTrigger("hit");
	}

	function Update () {
	}
}