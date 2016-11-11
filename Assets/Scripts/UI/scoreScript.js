#pragma strict
public class scoreScript extends MonoBehaviour {

	var playerMovement : playerMovementScript;
	var textObject : UnityEngine.UI.Text;
	public var bonus : GameObject;
	public var sickTrick : GameObject;
	public var score  = 0;
	public var jumpMaxBonus = 999;
	public var jumpMinBonus = 333;
	public var bonusFlashTime = 3.0;
	public var downHillBonus = 33;
	private var downHillPoints = 0.0;



	function Start () {
		textObject = GetComponent(UnityEngine.UI.Text);
		playerMovement = GameObject.Find("player").GetComponent(playerMovementScript);
	}

	function Jump( percent : float ) {
		var bonusAmount = Mathf.Floor( Mathf.Lerp( jumpMinBonus, jumpMaxBonus, percent));
		score += bonusAmount;
		bonus.GetComponent(flashingTextScript).textObject.text = "+" + bonusAmount;
		bonus.GetComponent(flashingTextScript).Flashing(true);

		Invoke ("hideBonus", bonusFlashTime);


		if ( percent >= 0.333 )
			sickTrick.GetComponent(Animator).SetTrigger("trick");
			
	}

	function hideBonus() {
		bonus.GetComponent(flashingTextScript).Hide();
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