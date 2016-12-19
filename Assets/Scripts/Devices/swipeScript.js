//inside class
public var myDevice : device;
var firstPressPos : Vector2;
var secondPressPos : Vector2;
var currentSwipe : Vector2;


function Awake () {
	myDevice = new device();


}
function Swipe ()
{
	
	if (myDevice.editor) {
		

	     if(Input.GetMouseButtonDown(0))
	     {
	         //save began touch 2d point
	        firstPressPos = new Vector2(Input.mousePosition.x,Input.mousePosition.y);
	     }
	     if(Input.GetMouseButtonUp(0))
	     {
	     	var direction  = "";
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
	            direction = "up";

	        }
	        //swipe down
	        if(currentSwipe.y < 0 && currentSwipe.x > -0.5f && currentSwipe.x < 0.5f)
	        {
//	            Debug.Log("down swipe");
				direction = "down";
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
	     return direction;
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

     	
     


	
}

function Update () {
	Swipe ();
//	Debug.Log("Swipe: " + Swipe());
}
 