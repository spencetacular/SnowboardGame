#pragma strict

public var goldBonus = 500;
public var magentaBonus = 1000;
public var isGold : boolean;

public var score : scoreScript;

function Bonus () {

	if (isGold) 
		score.score += goldBonus;
	else
		score.score += magentaBonus;

	GetComponent(SpriteRenderer).enabled = false;
	
}