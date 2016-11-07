#pragma strict
public class scoreScript extends MonoBehaviour {

	var playerMovement : playerMovementScript;
	var textObject : UnityEngine.UI.Text;
	public var bonus : GameObject;
	public var sickTrick : GameObject;
	public var score  = 0;
	public var jumpMaxBonus = 999;
	public var jumpMinBonus = 333;
	public var bonusFlashTime = 5.0;
	public var downHillBonus = 33;
	private var downHillPoints = 0.0;



	function Start () {
		textObject = GetComponent(UnityEngine.UI.Text);
		playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
		bonus.GetComponent(flashingTextScript).doesFlash = false;


	}

	function Jump( percent : float ) {
		var bonusAmount = Mathf.Floor( Mathf.Lerp( jumpMinBonus, jumpMaxBonus, percent));
		score += bonusAmount;
		bonus.GetComponent(flashingTextScript).textObject.text = "+" + bonusAmount;
		bonus.GetComponent(flashingTextScript).doesFlash = true;
		Invoke("hideBonus", bonusFlashTime);

		sickTrick.GetComponent(Animator).SetTrigger("trick");
			
	}

	function hideBonus() {
		bonus.GetComponent(flashingTextScript).doesFlash = false;
	}

	function Update () {

		if (playerMovement.playerStatus != playerMovement.Status.Right && playerMovement.playerStatus != playerMovement.Status.Left && playerMovement.playerStatus != playerMovement.Status.Wrecked) {
			downHillPoints += Time.deltaTime;
			
			if (downHillPoints >= 1.0) {
				score += downHillBonus;
				downHillPoints = 0.0;

			}
		}
		textObject.text  = "Score " + score.ToString();
	}
	
}