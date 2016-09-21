#pragma strict //Javascript has to abide by the rules

public var gObj//gObj = GameObject : GameObject; //Public variable that isaccessible to everyone...you can see it in unity
function Start () {//Code gets run one time

function CreateRandom();{ //create random number between two values

var x : float;
var y : float;

x = Random.range(-7.0,7.0);

y = 6;

Instantiate ( gObj /*object we will clone*/, Vector3(x,y,0) /*where will it start*/ ,
			 Quaternion.identity /*do we want it to rotate*/; 
}