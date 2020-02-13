// Hong Wei Chen TEAM MSPAINT
// SoftDev2 pd9
// K08: What is it saving the screen from?
// 2020-02-14

var c = document.getElementById("screen")
var ctx = c.getContext("2d")

// declare vars
var request;
var start = document.getElementById("start");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
// radius of circle
var rad = 1;
// expand or contract
var expand = 0;

// animate button
var play = function(e) {
  // if there are no existing requests, request the next frame
  if (!request){
    request = window.requestAnimationFrame(draw);
  }
}

// stop button
var halt = function(e) {
  // if request exists, cancel the request
  if (request) {
    window.cancelAnimationFrame(request)
    request = undefined; // resets request so it doesnt exist
  }
}

var x = Math.floor(Math.random() * 300 + 100)
var y = Math.floor(Math.random() * 300 + 100)
var dx;
var dy;

var bounce = function(e) {
  //clear screen, reset requests
  request = undefined
  ctx.clearRect(0,0,c.width,c.height);

  //draw image
  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.ellipse(x,y,10,10,0,0,Math.PI*2);
  ctx.fill();

  //update ball
  x = x + dx;
  y = y + dy;

  //bounds logic
  if (x + 10 >= c.width) {
    dx = -dx;
    
  }


}
var draw = function(e) {
  request = undefined; // reset request to get next frame
  ctx.clearRect(0,0,c.width,c.height); // clear canvas

  //draw circle
  ctx.fillStyle = '#add8e6';
  ctx.beginPath();
  ctx.ellipse(c.width / 2,c.height / 2,rad,rad,0,0,Math.PI * 2);
  ctx.fill();

  // checks if circle should expand or contract
  if (rad >= c.width/2) {
    expand = 0
  }
  if (rad <= 1) {
    expand = 1
  }
  if (expand == 1) {
    rad += 2
  } else {
    rad -= 2
  }

  // call animation button
  play();
}

start.addEventListener('click', play);
dvd.addEventListener('click',bounce);
stop.addEventListener('click', halt);
