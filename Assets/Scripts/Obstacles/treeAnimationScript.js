#pragma strict
	public class treeAnimationScript extends MonoBehaviour {

	var anim : Animator;
	var childAnim : Animator;

	function Start () {
		anim = GetComponent(Animator);
		childAnim = transform.Find("treeShadow").GetComponent(Animator);
	}

	function Fall () {
		anim.SetTrigger("hit");
		childAnim.SetTrigger("hit");
	}

	function Update () {
	}
}