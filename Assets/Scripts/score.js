#pragma strict
public class score extends MonoBehaviour {


	var textObject : UnityEngine.UI.Text;
	public var score  = 0;
	public var jumpBonus = 999;

	function Start () {
		textObject = GetComponent(UnityEngine.UI.Text);

	}

	function Jump() {
		score += jumpBonus;
		Debug.Log("JUMP!!!!!!!!!");
	}

	function Update () {
		// score += Mathf.FloorToInt(Time.timeSinceLevelLoad) * 10;
		textObject.text  = "Score " + score.ToString();
	}
	
}