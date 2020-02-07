// Hong Wei Chen
// SoftDev2 pd9
// K05 -- ...and I want to Paint it Better
// 2020-02-07

var c = document.getElementById("slate")
var ctx = c.getContext("2d")

var cl = document.getElementById("clear");
var tog = document.getElementById("toggle");

var state = 0; // rectangle is 0, cirlce is 1

var clear = function(e){
  console.log('clear')
  ctx.clearRect(0, 0, c.width, c.height);
}

//toggle state var: rect or circle
var change_tog = function(e){
  console.log('toggle')
  if (state == 0){
    state = 1;
  }
  else{
    state = 0;
  }
}

var add_shape = function(e){
  // e.preventDefault() prevents default functionality from occuring when activated by user
  e.preventDefault();
  if (state == 0){
    console.log('rectangle')
    ctx.fillStyle = "#00FF00";
    // e.offsetX and e.offsetY gives coordinates of the mouse when an event is triggered by click
    ctx.fillRect(e.offsetX,e.offsetY,100,50);
  }
  else{
    console.log("ellipse");
    ctx.fillStyle = "#FF0000";
    ctx.beginPath(); // begins or resets path, emtpies list of subpaths
    ctx.ellipse(e.offsetX,e.offsetY,10, 10, 0, 0, 2 * Math.PI);
    // ellipse is invisible until you fill it!
    ctx.fill();
  }
}

cl.addEventListener('click', clear)
tog.addEventListener('click', change_tog);
c.addEventListener('click', add_shape);
