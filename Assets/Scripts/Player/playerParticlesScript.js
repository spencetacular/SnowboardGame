#pragma strict

public var downhillPart : ParticleSystem;
var slideObject : GameObject;
var wreckObject : GameObject;
var partEmmiters = new List.<GameObject>();
public var playerMovement : playerMovementScript;
private var slideInitialY : float;

function Start () {

	downhillPart = transform.Find("downhillParticles").GetComponent(ParticleSystem);
	playerMovement = GetComponent(playerMovementScript);
	slideInitialY = slideObject.transform.position.y; 
}


function Slide (dir : String ) {

	var p = Instantiate(slideObject, new Vector3(transform.position.x, slideInitialY, 0.0), Quaternion.identity);
	p.transform.eulerAngles = new Vector3 (0.0, dir == "right" ? -90.0 : 90.0, 0.0);
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

function Update () {
	downhillPart.startSpeed = playerMovement.gameSpeed;
	particlesMovement();

	for (p in partEmmiters) {

		if (!p.GetComponent(ParticleSystem).isPlaying ) {
			partEmmiters.Remove(p);
			Destroy(p);
			break;
		}
	}
}