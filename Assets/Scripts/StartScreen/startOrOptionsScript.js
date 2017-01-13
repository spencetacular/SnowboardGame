#pragma strict

import UnityEngine.UI;

var startMitten : Image;
var optionsMitten : Image;
var startRect : RectTransform;
var optionsRect : RectTransform;
var startText : Text;
var optionsText : Text;
var hiScoreText : RectTransform;

var playPressed = false;
var levelToLoad  = "";
var options = "OptionsScreen";
public var soundEffects : soundEffectsScript;
public var swipe : swipeScript;
public var myDevice : device;
public var mobileTextScale = new Vector3 (1.5, 1.5, 1.5);
public var mobileTextSelectedScale = new Vector3 (1.8, 1.8, 1.8);
private var selectedColor = new Color (0.0, 0.8352941, 0.827451, 1.0);


var selectOptions = "down";
var selectStart = "up";

function Start () {
	myDevice = new device();
	levelToLoad = "SuperTopSecret";

	if (myDevice.mobile){
		levelToLoad = "Level01";
		selectOptions = "right";
		selectStart = "left";
		startText.color = selectedColor;

		startRect.anchoredPosition = new Vector2 (-175.0, 50.0);
		startRect.localScale = mobileTextSelectedScale;

		optionsRect.anchoredPosition = new Vector2 (175.0, 50.0);
		optionsRect.localScale = mobileTextScale;	
		hiScoreText.anchoredPosition = new Vector2 (0.0, 230.0);	

	}
	optionsMitten.enabled = false;

}

function Update () {

	

	if (swipe.Swipe() == selectOptions) {
		if (startMitten.enabled) {


			optionsMitten.enabled = true;
			startMitten.enabled = false;
			soundEffects.Scroll();

			if (myDevice.mobile){
				optionsText.color = selectedColor;
				optionsRect.localScale = mobileTextSelectedScale; 
				startText.color = Color.white;
				startRect.localScale = mobileTextScale;
			}

		}
	}

			

	if (swipe.Swipe() == selectStart) {
		if (optionsMitten.enabled) {
			
			optionsMitten.enabled = false;
			startMitten.enabled = true;
			soundEffects.Scroll();

			if (myDevice.mobile){
				optionsText.color = Color.white;
				optionsRect.localScale = mobileTextScale;
				startText.color = selectedColor;
				startRect.localScale = mobileTextSelectedScale;
			}

		}

	}

	if (swipe.Swipe() == "enter") {

			if (startMitten.enabled) {
				soundEffects.levelToLoad = levelToLoad;
				Debug.Log("Yep");
			}
			else
				soundEffects.levelToLoad = "OptionsScreen";

			soundEffects.Load();
		}

}





