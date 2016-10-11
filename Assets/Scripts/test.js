#pragma strict


var spriteRenderer : SpriteRenderer;

function Start () {

	spriteRenderer = GetComponent(SpriteRenderer);

}

function Update () {
	Debug.Log("position y: " + this.transform.position.y);
	Debug.Log("Bounds " + spriteRenderer.bounds.min.y);

}