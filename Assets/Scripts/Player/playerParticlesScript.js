#pragma strict

//public var downHillPart : GameObject;
public var downhillPart : ParticleSystem;
public var wreckPart : ParticleSystem;
var slideObject : GameObject;
public var slidePart : ParticleSystem;
public var downhillMax = 150.00;
public var dwnhillMin = 50.0;
public var playerMovement : playerMovementScript;

function Start () {

//	downHillPart.GetComponent(ParticleSystem).emissionRate = 150.0;
	downhillPart = transform.Find("downhillParticles").GetComponent(ParticleSystem);
	wreckPart = transform.Find("wreckParticles").GetComponent(ParticleSystem);
	slideObject = GameObject.Find("slideParticles");
	slidePart = slideObject.GetComponent(ParticleSystem);
	playerMovement = GetComponent(playerMovementScript);
	downhillPart.Stop();
//	downhillPart.emissionRate = 100.0;
}


function Slide (dir : String ) {
//	downhillPart.emissionRate = 50.0;
//	downhillPart.Play();
//	Invoke ("Stop", 2);
	var rotation : float;
	if (dir == "right") 
		rotation = -180.0;
	else 
		rotation = 0.0;


	slideObject.transform.eulerAngles = new Vector3 (rotation, 90.0, 90.0);
	downhillPart.Stop();
	slidePart.Play();
}

function Wreck () {
	downhillPart.Stop();
	wreckPart.Play();

}

//function Stop () {
//	downhillPart.Stop();	
//}

function Update () {

	
	downhillPart.emissionRate = Mathf.Lerp( downhillMax, dwnhillMin, playerMovement.speedPercent );

	
}