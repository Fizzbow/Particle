var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	W = canvas.width=500;
 	H = canvas.height=400;

	gridY = 7, gridX = 7;

	type = "ball";

   colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
  ];

var message = document.getElementById('message'),
	gravity = document.getElementById('gra'),
	duration = document.getElementById('dur'),
	speed = document.getElementById('speed'),
	radius = document.getElementById('rad'),
	resolution = document.getElementById('res');
	
	//console.log(gravity.value)

   graVal = parseFloat(gravity.value);
   durVal = parseFloat(duration.value);
   spdVal = parseFloat(speed.value);
   radVal = parseFloat(radius.value);
   resVal = parseFloat(resolution.value);	   

var word = new Shape(W/2, H/2, message.value);
	word.getValue();

function change(){
	  context.clearRect(0, 0, W, H);
	  gridX = parseFloat(resolution.value);
	  gridY = parseFloat(resolution.value);
	  word.placement = [];
	  word.text = message.value;
	  word.getValue();
}

function changeV() {
     graVal = parseFloat(gravity.value);
     durVal = parseFloat(duration.value);
     spdVal = parseFloat(speed.value);
     radVal = parseFloat(radius.value);
}

(function drawFrame(){
	window.requestAnimationFrame(drawFrame);
	context.clearRect(0, 0, W, H);

	for(var i=0; i< word.placement.length; i++){
		word.placement[i].update();
	}

}())

//resize
function resize(){
	W = canvas.width;
 	H = canvas.height;
}

window.addEventListener('resize', resize, false);
