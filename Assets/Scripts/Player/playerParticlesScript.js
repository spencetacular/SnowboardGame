#pragma strict

//public var downHillPart : GameObject;
public var downhillPart : ParticleSystem;
public var wreckPart : ParticleSystem;
var slideObject : GameObject;
var wreckObject : GameObject;
var partEmmiters = new List.<GameObject>();
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

	var rotation : float;
	if (dir == "right") 
		rotation = -90.0;
	else 
		rotation = 90.0;

	var p = Instantiate(slideObject, new Vector3(transform.position.x, slideInitialY, 0.0), Quaternion.identity);
	p.transform.eulerAngles = new Vector3 (0.0, rotation, 0.0);
//	slideObject.transform.position = new Vector3(transform.position.x, slideInitialY, 0.0);
	downhillPart.Stop();
	p.GetComponent(ParticleSystem).Play();
	partEmmiters.Add(p);


}

function Wreck () {

	var p = Instantiate(wreckObject, new Vector3(transform.position.x, slideInitialY, 0.0), Quaternion.identity);
	downhillPart.Stop();
	p.GetComponent(ParticleSystem).Play();
	partEmmiters.Add(p);

}

function particlesMovement() {

	for (p in partEmmiters) {

		if (playerMovement.downhill)
			p.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed, 0);


		else
			p.transform.Translate(0, 0, 0);	
			
	}
}

//function Stop () {
//	downhillPart.Stop();	
//}

function Update () {

	
//	downhillPart.emissionRate = Mathf.Lerp( downhillMax, dwnhillMin, playerMovement.speedPercent );

	downhillPart.startSpeed = playerMovement.gameSpeed;
	particlesMovement();

//	slideObject.transform.Translate(0.0, Time.deltaTime * 1.0, 0.0, Space.World);
//	Debug.Log( Time.deltaTime * 10.0);
//
//	if (playerMovement.playerStatus == playerMovement.playerStatus.Down) {
//		Debug.Log("Down");
//		slideObject.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed, 0);
//		wreckPart.transform.Translate(0, Time.deltaTime * playerMovement.gameSpeed, 0);
//	}

	for (p in partEmmiters) {
//		

		


		if (!p.GetComponent(ParticleSystem).isPlaying ) {
//			Debug.Log("Not Playing");
			partEmmiters.Remove(p);
			Destroy(p);
			break;
		}

//		if (!s.GetComponent(ParticleSystem).IsAlive ) {
//			Destroy(s);
//		}
	}


	
}