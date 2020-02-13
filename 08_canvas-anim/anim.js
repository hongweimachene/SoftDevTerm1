// Hong Wei Chen TEAM MSPAINT
// SoftDev2 pd9
// K08: What is it saving the screen from?
// 2020-02-14

var c = document.getElementById("screen")
var ctx = c.getContext("2d")

// declare vars
var request;
var state;
var start = document.getElementById("start");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");



// animate circle initial call
var play = function(e) {
  //change state to animate circle
  state = 0;
  // if there are no existing requests, request the next frame for the circle animation
  if (!request){
    request = window.requestAnimationFrame(draw);
  }
}

// animate dvd player call
var player = function(e) {
  //change state to animate dvd player
  state = 1;
  // if there are no existing requests, request the next frame for the dvd player
  if (!request) {
    request = window.requestAnimationFrame(draw);
  }
}

// stop button
var halt = function(e) {
  // if request exists, cancel the request
  if (request) {
    window.cancelAnimationFrame(request);
    request = undefined; // resets request so it doesnt exist
  }
}

// radius of circle
var rad = 1;
// expand or contract
var expand = 0;
//declare image position, and change in horizontal + vertical velocity
var x = Math.floor(Math.random() * 300 + 100)
var y = Math.floor(Math.random() * 300 + 100)
var dx = 2 || -2;
var dy = 2 || -2;

// circle expansion/contraction
var draw = function(e) {
  request = undefined; // reset request to get next frame
  ctx.clearRect(0,0,c.width,c.height); // clear canvas

  // state = 0 is CIRCLE EXPAND/CONTRACT
  if (state  == 0) {
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

    // call animation
    play();
  }

  // state = 1 is DVD PLAYER BOUNCE
  if (state == 1) {
    // draw image
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.ellipse(x,y,10,10,0,0,Math.PI*2);
    ctx.fill();

    // bounds logic
    //right
    if (x + 10 >= c.width) {
      dx = -1 * dx;
      x = c.width-10 || c.width-11;
    }
    //bottom
    if (y + 10 >= c.height) {
      dy = -1 * dy;
      y = c.height - 10 || c.height - 11;
    }
    //left
    if (x - 10 <= 0) {
      dx = -1 * dx;
      x = 10 || 11;
    }
    //top
    if (y - 10 <= 0) {
      dy = -1 * dy;
      y = 10 || 11;
    }

    // update image position
    x = x + dx;
    y = y + dy;

    // call animation
    player();
  }
}

start.addEventListener('click', play);
dvd.addEventListener('click', player);
stop.addEventListener('click', halt);
