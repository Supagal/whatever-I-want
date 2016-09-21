#pragma strict

function OnMouseDown()

{ 
	if(gameObject.transform.position.y >-2 && gameObject.transform.position.y >3)

	Destroy (gameObject);
}