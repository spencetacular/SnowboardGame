#pragma strict

public var goldBonus = 500;
public var magentaBonus = 1000;

public var score : scoreScript;

function Bonus () {

	if (this.tag == "coinGold") {
		score.score += goldBonus;
	}

	if (this.tag == "coinMagenta") {
		score.score += magentaBonus;
	}
}