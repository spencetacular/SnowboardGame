#pragma strict

var initialsText : UnityEngine.UI.Text;
var currentLetterText : UnityEngine.UI.Text;
var alphabet : String[];
//var playerInitials : Array;
var currentLetter : String;
var index = 0;
var maxInitials : int;
var initialIndex : int;

//var initial1 : UnityEngine.UI.Text;
//var initial2 : UnityEngine.UI.Text;
//var initial3 : UnityEngine.UI.Text;

public var initials :  UnityEngine.UI.Text[];
var currentInitial : UnityEngine.UI.Text;


function Start () {

 	alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// 	playerInitials = new Array();
	initialsText = GetComponent(UnityEngine.UI.Text);

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


//	currentLetterText = GameObject.Find("currentLetter").GetComponent(UnityEngine.UI.Text);
//	currentLetterText.text = currentLetter;

//	initial1.text = currentLetter;
//	initial2.text = "";
//	initial3.text = "";



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
		
		
	}
//	var ini : String;

//	if (
//	if (playerInitials.length < maxLetters) {
//		playerInitials.Push(alphabet[index]);

//		for (var i = 0; i < playerInitials.length; i++) {
//			ini = ini + playerInitials[i];
//		}
//		var numSpaces = maxLetters - playerInitials.length;
//		for(var j = 0; j <numSpaces; j++)
//			ini += " ";

//		initialsText.text = ini;
//		index = 0;
//		currentLetter = alphabet[index];
//		currentLetterText.text = currentLetter;
//	}

//	Debug.Log(playerInitials);
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