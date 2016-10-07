#pragma strict
public class score extends MonoBehaviour {

	var playerMovementScript : playerMovement;
	var textObject : UnityEngine.UI.Text;
	public var score  = 0;
	public var jumpBonus = 999;
	var downHillPoints = 0.0;

	function Start () {
		textObject = GetComponent(UnityEngine.UI.Text);
		playerMovementScript = GameObject.Find("player").GetComponent(playerMovement);

	}

	function Jump() {
		score += jumpBonus;
	}

	function Update () {

		if (playerMovementScript.playerStatus != "right" && playerMovementScript.playerStatus != "left" && playerMovementScript.playerStatus != "wrecked") {
			downHillPoints += Time.deltaTime;
			
			if (downHillPoints >= 1.0) {
				score += 1;
				downHillPoints = 0.0;

			}
		}
		textObject.text  = "Score " + score.ToString();
	}
	
}