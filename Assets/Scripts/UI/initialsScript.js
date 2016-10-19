#pragma strict

var initialsText : UnityEngine.UI.Text;
var currentLetterText : UnityEngine.UI.Text;
var alphabet : String[];
var playerInitials : Array;
var currentLetter : String;
var index = 0;
var maxLetters = 3;

function Start () {

 	alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

 	playerInitials = new Array();
	initialsText = GetComponent(UnityEngine.UI.Text);

	currentLetter = alphabet[index] + "  ";
	currentLetterText = GameObject.Find("currentLetter").GetComponent(UnityEngine.UI.Text);
	currentLetterText.text = currentLetter;

}

function NextLetter(){

	if (index >= alphabet.length -1)
		index = 0;
	else
		index++;

	currentLetter = alphabet[index];
	currentLetterText.text = currentLetter;

	Debug.Log(currentLetter);
	
}

function PreviousLetter(){
	if (index == 0)
		index = alphabet.length -1;
	else
		index--;

	currentLetter = alphabet[index];
	currentLetterText.text = currentLetter;

	Debug.Log(currentLetter);
	
}

function AssignLetter () {
	var ini : String;
	if (playerInitials.length < maxLetters) {
		playerInitials.Push(alphabet[index]);

		for (var i = 0; i < playerInitials.length; i++) {
			ini = ini + playerInitials[i];
		}
		var numSpaces = maxLetters - playerInitials.length;
		for(var j = 0; j <numSpaces; j++)
			ini += " ";

		initialsText.text = ini;
		index = 0;
		currentLetter = alphabet[index];
		currentLetterText.text = currentLetter;
	}

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