// Hong Wei Chen
// SoftDev2 pd9
// K06 -- Dot Dot Dot
// 2020-02-12

var c = document.getElementById("playground")
var ctx = c.getContext("2d")

var cl = document.getElementById("clear");

// used an array to store coordinates of the previous dot and the new dot
var coords = []

// clear
var clear = function(e){
  console.log('clear')
  ctx.clearRect(0, 0, c.width, c.height);
  coords = [] // clear coords
}

var draw = function(e){
  // add coords of new dot to array
  coords.push([e.offsetX,e.offsetY])
  // begin drawing
  ctx.beginPath();
  // draw dot
  ctx.fillStyle = "000000";
  ctx.ellipse(e.offsetX,e.offsetY,5, 5, 0, 0, 2 * Math.PI);
  ctx.fill();
  console.log('dot')
  // draw line
  ctx.moveTo(e.offsetX,e.offsetY); //sets pen to coords of new dot
  if (coords.length > 1) {
    ctx.lineTo(coords[0][0],coords[0][1]); //draws line to coords of previous dot
    coords.shift(); //coords.shift pops coords of previous dot
    console.log('line')
  }
  //render line
  ctx.stroke();
}

cl.addEventListener('click', clear)
c.addEventListener('click', draw);
