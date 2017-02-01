#pragma strict
import UnityEngine.SocialPlatforms;

function Start () {

	Social.localUser.Authenticate (function (success) {
        if (success) {
//        	loggedIn = true;
            Debug.Log ("Authentication successful");
            var userInfo : String = "Username: " + Social.localUser.userName + 
                "\nUser ID: " + Social.localUser.id ;
               
            Debug.Log (userInfo);
//			userName.text =  Social.localUser.userName;
        }
        else {
            Debug.Log ("Authentication failed");
//            userName.text = "LOG INTO GAME CENTER\nTO POST YOUR HIGH SCORE";
//            userName.fontSize = 18;
        }
    });

}

function Update () {

}