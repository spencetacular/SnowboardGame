﻿#pragma strict


var anim : AnimationCurve;
private var ks : Keyframe[];
public var initialScale = 0.75;
public var maxScale = 2.0;
public var minScale = 1.0;


function Start () {
//	ks = new Keyframe[3];
//	ks[0].time = 0;
//	ks[0]. value = 0.75;
//	ks[1].time = 1.0;
//	ks[1].value = 2.0;
//	ks[2].time = 3;
//	ks[2]. value = 0.75;
//	anim = new AnimationCurve(ks);
	ks = new Keyframe[3];
	CreateAniCurve( 3.0 , 1.0 );
	
}

function CreateAniCurve( length : float, percent: float) {
	ks[0].time = Time.time;
	ks[0]. value = initialScale;
	ks[2].time = Time.time + length;
	ks[2]. value = initialScale;

	ks[1].time = Time.time + length/2;
	ks[1].value =  Mathf.Lerp(minScale, maxScale, percent );
//	ks[1].value =  maxScale;
	anim = new AnimationCurve(ks);
	 
}

function Update () {

}