﻿#pragma strict

public class User {
	public var initials : String;
	public var score : int;

	public function User (ini : String, sc : int) {
		initials = ini;
		score = sc;
	}
}


public var topUsers = new Array();

function Start () {

//	usersProfile = GetComponent(userProfileScript);
//	Debug.Log(users.topUsers.user);

//	Debug.Log(skc.initials);



 var skc : User = User("SKC", 9999);
topUsers.Push(skc);

//Debug.Log(topUsers[0].score);

//	var newUser : userProfile.User = userProfile.User("SKC", 99999);
//	public var u : User = User("SKC", 9999); 

//	fakeUserData ();

//	topUsers.Push(skc);
//	for (var i = 0; i < topUsers.length; i++) {
////		Debug.Log(u.initials);
//		Debug.Log(topUsers[i].u);
//	}
//	Debug.Log(topUsers.length);

//	for (u in topUsers)
//		Debug.Log(u.score);

}

//function fakeUserData () {
//		for (var i = 0; i < 10; i++) {
//			var u : User = new User("ASS", 99999 + Random.Range(-555, 777));
//			topUsers.Push(u);
////			Debug.Log(u.score);
//		}
//	}


function Update () {

}