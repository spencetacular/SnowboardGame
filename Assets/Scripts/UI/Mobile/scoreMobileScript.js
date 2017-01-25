#pragma strict

var myDevice : device;
public var scale : Vector3;
public var isSpeed = false;

function Start () {

	myDevice = new device();

	if (myDevice.mobile && !myDevice.iPad) {
		this.GetComponent(RectTransform).localScale = scale;

		if (isSpeed) {
			var pos = this.GetComponent(RectTransform).localPosition;
			var shift = 55.0;
			pos.x += shift;
			this.GetComponent(RectTransform).localPosition = pos;
		}
	}
}
