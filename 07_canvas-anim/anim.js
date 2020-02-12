var c = document.getElementById("screen")
var ctx = c.getContext("2d")

var request;
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var state = 0;
var rad;
var expand = 0;

var play = function(e) {
  rad = 1;
  
  request = requestAnimationFrame(draw)
}

var halt = function(e) {
  cancelAnimationFrame(request)
}

var draw = function(e) {
  request = requestAnimationFrame(draw)
  ctx.fillStyle = '000000';
  ctx.beginPath();
  ctx.ellipse(c.width / 2,c.height / 2,rad,rad,0,0,Math.PI * 2);
  ctx.fill();
  if (rad >= c.width/2) {
    expand = 0
  } else {
    expand = 1
  }
  if (expand = 1) {
    rad += 1
  } else {
    rad -= 1
  }
}

request = requestAnimationFrame(draw)

start.addEventListener('click', play)
stop.addEventListener('click', halt);
