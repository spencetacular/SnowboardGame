#pragma strict
	public class treeAnimationScript extends MonoBehaviour {

	var anim : Animator;
	var childAnim : Animator;

	function Start () {
		anim = GetComponent(Animator);
		childAnim = GetChild.GetComponent(Animator);
	}

	function Fall () {
		anim.SetTrigger("hit");
	}

	function Update () {
	}
}