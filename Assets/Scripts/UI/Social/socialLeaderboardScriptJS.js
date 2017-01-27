#pragma strict
import System.Collections;
import UnityEngine.SocialPlatforms;
import UnityEngine.UI;

public var scores : Text;
public var score : Text;
public var users : Text;
public var userName : Text;

function Start () {
	CheckUser();
}


function CheckUser () {

	Social.localUser.Authenticate (function (success) {
        if (success) {
            Debug.Log ("Authentication successful");
//            var userInfo : String = "Username: " + Social.localUser.userName + 
//                "\nUser ID: " + Social.localUser.id 
//               
//            Debug.Log (userInfo);
//			userName.text =  Social.localUser.userName;
 			 userName.text = "LOG INTO GAME CENTER\nTO POST YOUR HIGH SCORE";
 			 userName.fontSize = 18;
        }
        else
            Debug.Log ("Authentication failed");
            userName.text = "LOG INTO GAME CENTER\nTO POST YOUR HIGH SCORE";
    });

}


function Update () {

}