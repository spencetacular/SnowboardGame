#pragma strict

var currentLetterText : UnityEngine.UI.Text;
var alphabet : String[];
var currentLetter : String;
var index = 0;
var maxInitials : int;
var initialIndex : int;
public var initials :  UnityEngine.UI.Text[];
var currentInitial : UnityEngine.UI.Text;
public var gameOver = false;
var soundEffects : soundEffectsScript;
var finished = false;
public var swipe : swipeScript;

function Start () {

 	alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	currentLetter = alphabet[index];
	currentInitial = initials[0];
	maxInitials = initials.length -1;
	initialIndex = 0;

	for (i in initials) {
		i.text = "";
		i.GetComponent(flashingTextScript).Flashing(false);
	}
	currentInitial.GetComponent(flashingTextScript).Flashing(true);
	currentInitial.text = currentLetter;
}

function NextLetter(){

	if (index >= alphabet.length -1)
		index = 0;
	else
		index++;

	currentLetter = alphabet[index];
	currentInitial.text = currentLetter;
	soundEffects.Scroll();
}

function PreviousLetter(){
	if (index == 0)
		index = alphabet.length -1;
	else
		index--;

	currentLetter = alphabet[index];
	currentInitial.text = currentLetter;
	soundEffects.Scroll();
}

function NewHighScore (){
	var ini = CompletedInitials();
	GameObject.Find("topScoresScores").GetComponent(topScoresScript).AddNewTopScore(ini);
}

function CompletedInitials() : String {

	var ini : String;
	for (i in initials) {
		ini += i.text;
	}
	return ini;
}

function AssignLetter () {

	if (initialIndex < maxInitials) {
		currentInitial.GetComponent(flashingTextScript).Flashing(false);
		currentInitial.text = currentLetter;
		initialIndex++;
		currentInitial = initials[initialIndex];
		currentInitial.GetComponent(flashingTextScript).Flashing(true);
		index = 0;
		currentLetter = alphabet[index];
		currentInitial.text = currentLetter;
	} else {
		currentInitial.GetComponent(flashingTextScript).Flashing(false);
		finished = true;
		NewHighScore ();	
	}

	soundEffects.Select();
}

function Update () {
	if (gameOver == true && !finished) {

		if (swipe.Swipe() == "right") 
			NextLetter();

		if (swipe.Swipe() == "left") 
			PreviousLetter();

		if (swipe.Swipe() == "enter") 
			AssignLetter();
	}
}