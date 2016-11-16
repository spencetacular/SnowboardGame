#pragma strict

public var downhillPartOnTop : ParticleSystem;
public var downhillPartBehind : ParticleSystem;
var slideObject : GameObject;
var wreckObject : GameObject;
var partEmmiters = new List.<GameObject>();
public var playerMovement : playerMovementScript;
private var slideInitialY : float;

function Start () {

//	downhillPart = transform.Find("downhillParticles").GetComponent(ParticleSystem);
	playerMovement = GetComponent(playerMovementScript);
	slideInitialY = slideObject.transform.position.y; 
	PlayDownHill(false);
}

function PlayDownHill ( play : boolean ) {
	if (play) {
		downhillPartOnTop.Play();
		downhillPartBehind.Play();	
	} else {
		downhillPartOnTop.Stop();
		downhillPartBehind.Stop();	
	}
}


function Slide (dir : String ) {

	var p = Instantiate(slideObject, new Vector3(transform.position.x, slideInitialY, 0.0), Quaternion.identity);
	p.transform.eulerAngles = new Vector3 (0.0, dir == "right" ? -90.0 : 90.0, 0.0);
	PlayDownHill(false);
	p.GetComponent(ParticleSystem).Play();
	partEmmiters.Add(p);
}

function Wreck () {

	var p = Instantiate(wreckObject, new Vector3(transform.position.x, slideInitialY, 0.0), Quaternion.identity);
	PlayDownHill(false);
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
	downhillPartOnTop.startSpeed = playerMovement.gameSpeed;
	downhillPartBehind.startSpeed = playerMovement.gameSpeed;
	particlesMovement();

	for (p in partEmmiters) {

		if (!p.GetComponent(ParticleSystem).isPlaying ) {
			partEmmiters.Remove(p);
			Destroy(p);
			break;
		}
	}
}