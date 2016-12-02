#pragma strict
	public class treeAnimationScript extends MonoBehaviour {

	var anim : Animator;
	var childAnim : Animator;

	function Start () {
	}

	function Fall () {
		anim.SetTrigger("hit");
		childAnim.SetTrigger("hit");
	}

	function Update () {
	}
}