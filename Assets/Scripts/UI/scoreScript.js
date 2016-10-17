#pragma strict
public class scoreScript extends MonoBehaviour {

	var playerMovement : playerMovementScript;
	var textObject : UnityEngine.UI.Text;
	public var score  = 0;
	public var jumpBonus = 999;
	var downHillPoints = 0.0;

	function Start () {
		textObject = GetComponent(UnityEngine.UI.Text);
		playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);

	}

	function Jump() {
		score += jumpBonus;
	}

	function Update () {

		if (playerMovement.playerStatus != "right" && playerMovement.playerStatus != "left" && playerMovement.playerStatus != "wrecked") {
			downHillPoints += Time.deltaTime;
			
			if (downHillPoints >= 1.0) {
				score += 1;
				downHillPoints = 0.0;

			}
		}
		textObject.text  = "Score " + score.ToString();
	}
	
}