//inside class


public var myDevice : device;
var firstPressPos : Vector2;
var secondPressPos : Vector2;
var currentSwipe : Vector2;


function Awake () {
	myDevice = new device();

//	enterButton.onClick.AddListener(Click);


}


function Swipe ()
{
	var input  = "";

	if (Input.GetKeyDown ("down") || Input.GetKeyDown ("d")) {
		input = "down";
//		return input;
	}

	if (Input.GetKeyDown ("up") || Input.GetKeyDown ("g")) {
		input = "up";
//		return input;
	}

	if (Input.GetKeyDown ("left") || Input.GetKeyDown ("f")) {
		input = "left";
//		return input;
	}

	if (Input.GetKeyDown ("right") || Input.GetKeyDown ("r")) {
		input = "right";
//		return input;
	}

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2")) {
		input = "enter";
	}

	// Use Mouse input for testing swipes
	if (myDevice.editor) {

	     if(Input.GetMouseButtonDown(0))
	     {
	        var p = Input.mousePosition;
	        p = Camera.main.ScreenToWorldPoint(p);
	        if (p.x < 0)
	        	 firstPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
	        else
	        	input = "enter";
	     }

	     if(Input.GetMouseButtonUp(0) && firstPressPos != null)
	     {

	        secondPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
	        currentSwipe = new Vector2(secondPressPos.x - firstPressPos.x, secondPressPos.y - firstPressPos.y);
	           
	        currentSwipe.Normalize();
	 
	        if(currentSwipe.y > 0 && currentSwipe.x > -0.5f &&  currentSwipe.x < 0.5f)
	        {
	            input = "up";

	        }
	        if(currentSwipe.y < 0 && currentSwipe.x > -0.5f && currentSwipe.x < 0.5f)
	        {
				input = "down";
	        }
	        if(currentSwipe.x < 0 &&  currentSwipe.y > -0.5f &&  currentSwipe.y < 0.5f)
	        {
				input = "left";
	        }
	        if(currentSwipe.x > 0 && currentSwipe.y > -0.5f && currentSwipe.y < 0.5f)
	        {
				input = "right";
	        }
	     
	    }

	}





	if (myDevice.mobile) {

		 if(Input.touches.Length > 0) {

		 	var t: Touch = Input.GetTouch(0);

		 	if(t.phase == TouchPhase.Began) {
		        var p2 = Input.mousePosition;
		        p2 = Camera.main.ScreenToWorldPoint(p2);
		        if (p2.x < 0)
		        	 firstPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
		        else
		        	input = "enter";
			}

		    if(t.phase == TouchPhase.Ended ) {
		            //save ended touch 2d point
		        secondPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
		       
		            //create vector from the two points
		        currentSwipe = new Vector2(secondPressPos.x - firstPressPos.x, secondPressPos.y - firstPressPos.y);
		           
		        //normalize the 2d vector
		        currentSwipe.Normalize();
		 
		        //swipe upwards
		        if(currentSwipe.y > 0 && currentSwipe.x > -0.5f &&  currentSwipe.x < 0.5f)
		        {
		            Debug.Log("up swipe");
		        }
		        //swipe down
		        if(currentSwipe.y < 0 && currentSwipe.x > -0.5f && currentSwipe.x < 0.5f)
		        {
		            Debug.Log("down swipe");
		        }
		        //swipe left
		        if(currentSwipe.x < 0 &&  currentSwipe.y > -0.5f &&  currentSwipe.y < 0.5f)
		        {
		            Debug.Log("left swipe");
		        }
		        //swipe right
		        if(currentSwipe.x > 0 && currentSwipe.y > -0.5f && currentSwipe.y < 0.5f)
		        {
		            Debug.Log("right swipe");
		        }
		    }

     	}

	     

	}

    return input; 	
     


	
}

function Update () {
	Swipe ();
//	Debug.Log("Clicked: " + clicked);
//	Debug.Log("Swipe: " + Swipe ());
}
 