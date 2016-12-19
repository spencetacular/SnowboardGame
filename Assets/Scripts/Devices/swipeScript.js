//inside class


public var myDevice : device;
var firstPressPos : Vector2;
var secondPressPos : Vector2;
var currentSwipe : Vector2;
var enterButton : Button;
var clicked = false;

function Awake () {
	myDevice = new device();

	enterButton.onClick.AddListener(Click);


}

function Click () {
	clicked = true;
	Debug.Log("Clicked");
}
//function Enter() {
//	var input =  "";
//
//	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") ) {
//		input = "enter";
//	}
//
//
//}

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

	if (Input.GetKeyDown ("space") || Input.GetKeyDown ("2") || clicked == true) {
		input = "enter";
		clicked = false;
		return input;
	}


	if (myDevice.editor) {
		

	     if(Input.GetMouseButtonDown(0))
	     {
	         //save began touch 2d point
	        firstPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
	     }
	     if(Input.GetMouseButtonUp(0))
	     {
//	     	var direction  = "";
	            //save ended touch 2d point
	        secondPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
	       
	            //create vector from the two points
	        currentSwipe = new Vector2(secondPressPos.x - firstPressPos.x, secondPressPos.y - firstPressPos.y);
	           
	        //normalize the 2d vector
	        currentSwipe.Normalize();
	 
	        //swipe upwards
	        if(currentSwipe.y > 0 && currentSwipe.x > -0.5f &&  currentSwipe.x < 0.5f)
	        {
//	            Debug.Log("up swipe");
	            input = "up";

	        }
	        //swipe down
	        if(currentSwipe.y < 0 && currentSwipe.x > -0.5f && currentSwipe.x < 0.5f)
	        {
//	            Debug.Log("down swipe");
				input = "down";
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





//	if (myDevice.editor) {
//		var t: Touch = Input.GetTouch(0);
//
//	     if(Input.GetMouseButtonDown(0) || t.phase == TouchPhase.Began)
//	     {
//	         //save began touch 2d point
//	        firstPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
//	     }
//	     if(Input.GetMouseButtonUp(0) || t.phase == TouchPhase.Ended )
//	     {
//	            //save ended touch 2d point
//	        secondPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
//	       
//	            //create vector from the two points
//	        currentSwipe = new Vector2(secondPressPos.x - firstPressPos.x, secondPressPos.y - firstPressPos.y);
//	           
//	        //normalize the 2d vector
//	        currentSwipe.Normalize();
//	 
//	        //swipe upwards
//	        if(currentSwipe.y > 0 && currentSwipe.x > -0.5f &&  currentSwipe.x < 0.5f)
//	        {
//	            Debug.Log("up swipe");
//	        }
//	        //swipe down
//	        if(currentSwipe.y < 0 && currentSwipe.x > -0.5f && currentSwipe.x < 0.5f)
//	        {
//	            Debug.Log("down swipe");
//	        }
//	        //swipe left
//	        if(currentSwipe.x < 0 &&  currentSwipe.y > -0.5f &&  currentSwipe.y < 0.5f)
//	        {
//	            Debug.Log("left swipe");
//	        }
//	        //swipe right
//	        if(currentSwipe.x > 0 && currentSwipe.y > -0.5f && currentSwipe.y < 0.5f)
//	        {
//	            Debug.Log("right swipe");
//	        }
//	    }
//
//	}

    return input; 	
     


	
}

function Update () {
	Swipe ();
//	Debug.Log("Clicked: " + clicked);
//	Debug.Log("Swipe: " + Swipe ());
}
 