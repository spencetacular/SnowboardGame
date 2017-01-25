#pragma strict

public var goldBonus = 333;
public var magentaBonus = 666;
public var isGold : boolean;
public var score : scoreScript;

function Bonus () {

	if (isGold) 
		score.Bonus(goldBonus);
	else
		score.Bonus(magentaBonus);

	GetComponent(SpriteRenderer).enabled = false;
	
}