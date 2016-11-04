#pragma strict
var spriteRenderer : SpriteRenderer;
var playerMovement : playerMovementScript;
var animScale : AnimationCurve;
var animPosition : AnimationCurve;
private var ks : Keyframe[];
private var kp : Keyframe[];
public var maxDisplacement = 1.5;
public var minDisplacement = 0.75;
private var initialPosY : float;
 
function Start () {
	spriteRenderer = this.GetComponent(SpriteRenderer);
	playerMovement = this.GetComponentInParent(playerMovementScript);
	spriteRenderer.enabled = false;
	kp = new Keyframe[3];
	initialPosY = transform.position.y;
	CreateAniCurves( 3.0 , 1.0 );
}

function CreateAniCurves( length : float, percent: float) {

	kp[0].time = Time.time;
	kp[0].value = 0.0;
	kp[2].time = Time.time + length;
	kp[2].value = 0.0;

	kp[1].time = Time.time + length/2;
	kp[1].value =  Mathf.Lerp(minDisplacement, maxDisplacement, percent );
	animPosition = new AnimationCurve(kp);
	 
}

function Update () {
	
	if (playerMovement.isJumping == true) {
		spriteRenderer.enabled = true;
		var x =  transform.parent.transform.localPosition.x - animPosition.Evaluate(Time.time);
		var y =  initialPosY + transform.parent.transform.localPosition.y - animPosition.Evaluate(Time.time) / 2;
		this.transform.position = new Vector3( x, y, 0);
	} else {
		spriteRenderer.enabled = false;
	}

}