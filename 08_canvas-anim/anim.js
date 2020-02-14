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

//get image
var img = new Image();
img.src = "https://raw.githubusercontent.com/stuy-softdev/notes-and-code19-20/master/smpl/200214f_js-canvas-anim/logo_dvd.jpg?token=AKIPN55TGL3CRNWS3N56T7S6J5S7A";

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

// circle expansion/contraction
var draw = function(e) {
  window.cancelAnimationFrame(request);
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

  // call animation
  request = requestAnimationFrame(draw);
}



// animate dvd player
var bounce = function(e) {
  window.cancelAnimationFrame(request);
  request = undefined;
  // new position each time button is clicked
  var x = Math.floor(Math.random() * c.width / 2) + 100
  var y = Math.floor(Math.random() * c.height / 2) + 100
  // change in horizontal + vertical velocity
  var dx = 2;
  var dy = 2;

  // animate dvd player
  var anim = function() {
    // clear screen
    ctx.clearRect(0,0,c.width,c.height);
    // draw image
    ctx.drawImage(img,x,y,120,80)

    // bounds logic
    //right
    if (x + 120 >= c.width) {
      dx = -dx;
      x = c.width - 120
    }
    //bottom
    if (y + 80 >= c.height) {
      dy = -dy;
      y = c.height - 80
    }
    //left
    if (x <= 0) {
      dx = -dx;
    }
    //top
    if (y <= 0) {
      dy = -dy;
    }

    // update image position
    x = x + dx;
    y = y + dy;

    // call animation
    request = window.requestAnimationFrame(anim);
  }
  // recursive call
  anim();
}

start.addEventListener('click', draw);
dvd.addEventListener('click', bounce);
stop.addEventListener('click', halt);
