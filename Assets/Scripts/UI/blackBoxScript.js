#pragma strict

import UnityEngine.UI;

public var leftBar : Image;
public var rightBar : Image;
public var bottomBar : Image; 

function Start () {
	if (EditorUserBuildSettings.activeBuildTarget == EditorUserBuildSettings.activeBuildTarget.iOS) {
		leftBar.enabled = false;
		rightBar.enabled = false;
		bottomBar.enabled = false;
	} 
}

function Update () {

}