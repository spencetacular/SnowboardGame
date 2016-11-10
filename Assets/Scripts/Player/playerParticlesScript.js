#pragma strict

//public var downHillPart : GameObject;
public var downhillPart : ParticleSystem;
public var wreckPart : ParticleSystem;
var slideObject : GameObject;
var wreckObject : GameObject;
var slides = new List.<GameObject>();
//public var slidePart : ParticleSystem;
//public var downhillMax = 150.00;
//public var dwnhillMin = 50.0;
public var playerMovement : playerMovementScript;
private var slideInitialY : float;
//private var slideDuration : float;

function Start () {

//	downHillPart.GetComponent(ParticleSystem).emissionRate = 150.0;
	downhillPart = transform.Find("downhillParticles").GetComponent(ParticleSystem);
//	wreckPart = wreckPart.GetComponent(ParticleSystem);
//	slideObject = GameObject.Find("slideParticles");
//	slidePart = slideObject.GetComponent(ParticleSystem);
	playerMovement = GetComponent(playerMovementScript);
	downhillPart.Stop();
//	downhillPart.emissionRate = 100.0;
	slideInitialY = slideObject.transform.position.y; 
//	slideTime = slideObject.GetComponent(ParticleSystem).duration + slideObject.GetComponent(ParticleSystem).startLifetime;
//	Debug.Log(slideDuration);
}


function Slide (dir : String ) {
//
//	var rotation : float;
//	if (dir == "right") 
//		rotation = -90.0;
//	else 
//		rotation = 90.0;
//
//	var s = Instantiate(slideObject, new Vector3(transform.position.x, slideInitialY, 0.0), Quaternion.identity);
//	s.transform.eulerAngles = new Vector3 (0.0, rotation, 0.0);
////	slideObject.transform.position = new Vector3(transform.position.x, slideInitialY, 0.0);
//	downhillPart.Stop();
//	s.GetComponent(ParticleSystem).Play();
//	slides.Add(s);


}

function Wreck () {

	
	downhillPart.Stop();
//	wreckPart.Play();

}

function particlesMovement(viewPos : Vector3) {

//		for (obs in obstacles){
//
//			if ( playerStatus == Status.Down ) 
//				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
//
//			if (playerStatus == Status.Wrecked) {
//					obs.transform.Translate(0, 0, 0);
//			}
//			if (playerStatus == Status.Jumping) {
//					obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
//			}
//			if (playerStatus == Status.DownRight) {
//
//				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
//				if (viewPos.x < 1 - playerWidth) {
//					transform.Translate(Time.deltaTime * gameSpeed/2, 0, 0);			
//				}
//			}
//
//			if ( playerStatus == Status.DownLeft ) {
//				obs.transform.Translate(0, Time.deltaTime * gameSpeed, 0);
//				if (viewPos.x > playerWidth) {
//					transform.Translate(-1 * Time.deltaTime * gameSpeed/2, 0, 0);
//				}
//			}
//
//		}
	}

//function Stop () {
//	downhillPart.Stop();	
//}

function Update () {

	
//	downhillPart.emissionRate = Mathf.Lerp( downhillMax, dwnhillMin, playerMovement.speedPercent );

	downhillPart.startSpeed = playerMovement.gameSpeed;

//	slideObject.transform.Translate(0.0, Time.deltaTime * 1.0, 0.0, Space.World);
//	Debug.Log( Time.deltaTime * 10.0);
//
//	if (playerMovement.playerStatus == playerMovement.playerStatus.Down) {
//		Debug.Log("Down");
//		slideObject.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed, 0);
//		wreckPart.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed, 0);
//	}

	for (s in slides) {
//		Debug.Log(s.GetComponent(ParticleSystem).IsAlive);

//		Debug.Log(s.GetComponent(ParticleSystem).time);
		var timeToDie = s.GetComponent(ParticleSystem).duration + slideObject.GetComponent(ParticleSystem).startLifetime;
		Debug.Log(timeToDie);
		if (s.GetComponent(ParticleSystem).time >= timeToDie) {
			Debug.Log("Done");
		}
//		if (s.GetComponent(ParticleSystem).IsAlive ) {
//			Debug.Log("Alive");
//		}

//		if (!s.GetComponent(ParticleSystem).IsAlive ) {
//			Destroy(s);
//		}
	}


	
}