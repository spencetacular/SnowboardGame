#pragma strict
import UnityEngine.UI;
public class scoreScript extends MonoBehaviour {

	var playerMovement : playerMovementScript;
	var textObject : UnityEngine.UI.Text;
	public var bonus : GameObject;
	public var score  = 0;
	public var jumpMaxBonus = 999;
	public var jumpMinBonus = 333;
	public var downHillBonus = 33;
	private var downHillPoints = 0.0;
	public var anim : Animator;
	public var bonusText : Text;

	function Start () {
		textObject = GetComponent(UnityEngine.UI.Text);
		playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
	}

	function Jump (percent : float) {

		var bonusAmount = Mathf.Floor( Mathf.Lerp( jumpMinBonus, jumpMaxBonus, percent));
		score += bonusAmount;
		Bonus(bonusAmount);
	}

	function Bonus (amount : int) {
		bonusText.text = "+" + amount;
		score += amount;
		anim.SetTrigger("bonus");
	}

	function OneUp () {
		bonusText.text = "1 UP!";
		anim.SetTrigger("bonus");
	}

	function Update () {

		if (playerMovement.playerStatus != playerMovement.Status.Right && playerMovement.playerStatus != playerMovement.Status.Left 
			&& playerMovement.playerStatus != playerMovement.Status.Wrecked) {
			downHillPoints += Time.deltaTime;
			
			if (downHillPoints >= 1.0) {
				score += downHillBonus;
				downHillPoints = 0.0;
			}
		}
		textObject.text  = score.ToString();
	}
}