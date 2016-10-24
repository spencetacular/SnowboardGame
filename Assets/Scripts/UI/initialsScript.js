#pragma strict

//var initialsText : UnityEngine.UI.Text;
var currentLetterText : UnityEngine.UI.Text;
var alphabet : String[];
var currentLetter : String;
var index = 0;
var maxInitials : int;
var initialIndex : int;
public var initials :  UnityEngine.UI.Text[];
var currentInitial : UnityEngine.UI.Text;


function Start () {

 	alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// 	playerInitials = new Array();
//	initialsText = GetComponent(UnityEngine.UI.Text);

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

//	this.enabled = false;

}

function NextLetter(){

	if (index >= alphabet.length -1)
		index = 0;
	else
		index++;

	currentLetter = alphabet[index];
	currentInitial.text = currentLetter;

//	Debug.Log(currentLetter);
	
}

function PreviousLetter(){
	if (index == 0)
		index = alphabet.length -1;
	else
		index--;

	currentLetter = alphabet[index];
//	currentLetterText.text = currentLetter;
	currentInitial.text = currentLetter;

//	Debug.Log(currentLetter);
	
}

function NewHighScore (){
	var ini = CompletedInitials();
//	Debug.Log(ini);
	GameObject.Find("topScores").GetComponent(topScoresScript).AddNewTopScore(ini);


}

function CompletedInitials() : String {
	var ini : String;
	for (i in initials) {
		ini += i.text;
//		i.GetComponent(flashingTextScript).Flashing(false);
	}
//	Debug.Log(ini);
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
		NewHighScore ();
		
	}
}

function Update () {

	if (Input.GetKeyDown ("right"))
		NextLetter();

	if (Input.GetKeyDown ("left"))
		PreviousLetter();

	if (Input.GetKeyDown ("space"))
		AssignLetter();

//	Debug.Log(alphabet[index]);
	

	

	

}