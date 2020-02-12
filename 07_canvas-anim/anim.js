// Hong Wei Chen
// SoftDev2 pd9
// K07 -- They lock us in the tower whenever we get caught ...which is often
// 2020-02-13

var c = document.getElementById("screen")
var ctx = c.getContext("2d")

// declare vars
var request;
var start = document.getElementById("start");
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
stop.addEventListener('click', halt);
