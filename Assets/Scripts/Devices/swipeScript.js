//inside class


public var myDevice : device;
var firstPressPos : Vector2;
var secondPressPos : Vector2;
var currentSwipe : Vector2;
var gamePlayControls = false;
var instructionsControls = false;
//var gameOverControls = false;

var touchAreaCenter = 5.0;


function Awake () {
	myDevice = new device();




}


function Swipe ()
{
	var input  = "";

	if (Input.GetKeyDown ("down") || Input.GetKeyDown ("d"))  {
		input = "down";
	}

	if (Input.GetKeyDown ("up") || Input.GetKeyDown ("g")) {
		input = "up";
	}

	if (Input.GetKeyDown ("left") || Input.GetKeyDown ("f")) {
		input = "left";
	}

	if (Input.GetKeyDown ("right") || Input.GetKeyDown ("r")) {
		input = "right";
	}

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2")) {
		input = "enter";
	}

	 var p = Input.mousePosition;
	 p = Camera.main.ScreenToWorldPoint(p);

	 

//	if (myDevice.editor ) {
		
		if(Input.GetMouseButtonDown(0)) {

			if (instructionsControls) {
				input = "enter";
			} else {
	       
		        if (p.x < -1 * touchAreaCenter) {
					input = "left";	
	        	}
	        	if (p.x > touchAreaCenter) {
	        		input = "right";
	        	}
	        	if (p.x > -1 * touchAreaCenter && p.x < touchAreaCenter) {
	        		if (gamePlayControls == true)
		        		input = "down";
		        	else
		        		input = "enter";
	        	}
	        }
	    }
		

//	}

//	if (myDevice.mobile) {
//
//		
////		t =  Camera.main.ScreenToWorldPoint(t.position);
//
//		if(Input.touches.Length > 0) { 
//
//			var t: Touch = Input.GetTouch(0);
//			Debug.Log(t.position.x);
//			if (t.position.x < -1 * touchAreaCenter) {
//				input = "left";	
//        	}
//        	if (t.position.x > touchAreaCenter) {
//        		input = "right";
//        	}
//        	if (t.position.x > -1 *  touchAreaCenter && p.x < touchAreaCenter) {
//        		if (gamePlayControls == true)
//	        		input = "down";
//	        	else
//	        		input = "enter";
//        	}
//			
//		}
//		
//	}


    return input; 	
     


	
}

function Update () {
	Swipe ();
//	Debug.Log("Clicked: " + clicked);
//	Debug.Log("Swipe: " + Swipe ());
}
 