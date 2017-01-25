public var myDevice : device;
var touchAreaCenter = 5.0;
var touchAreaCenterY = -3.0;

function Awake () {
	myDevice = new device();
}

function Swipe ()
{
	var input  = "";

	if (Input.GetKeyDown ("down") || Input.GetKeyDown ("g"))
		input = "down";

	if (Input.GetKeyDown ("up") || Input.GetKeyDown ("d"))
		input = "up";

	if (Input.GetKeyDown ("left") || Input.GetKeyDown ("r"))
		input = "left";

	if (Input.GetKeyDown ("right") || Input.GetKeyDown ("f"))
		input = "right";

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2"))
		input = "enter";

	 var p = Input.mousePosition;
	 p = Camera.main.ScreenToWorldPoint(p);
	 		
		if(Input.GetMouseButtonDown(0)) {

	        if (p.x < 0)
				input = "left";	
        	if (p.x >= 0)
        		input = "right";
        	if (p.x > -1 * touchAreaCenter && p.x < touchAreaCenter && p.y < touchAreaCenterY)
        		input = "enter";
	    }

    return input; 		
}

function Update () {
	Swipe ();
}
 