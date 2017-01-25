#pragma strict
public class treeAnimationScript extends MonoBehaviour {

	var anim : Animator;
	var childAnim : Animator;

	function Fall () {
		anim.SetTrigger("hit");
		childAnim.SetTrigger("hit");
	}

	function RandomScale () {
		var Scale =  1.0 - Random.Range(0.0, 0.3);
		this.transform.localScale = new Vector3(Scale, Scale, 0);
	}
}