// Tammy Chen, Hong Wei Chen
// SoftDev2 pd9
// K04 -- I See a Red Door...
// 2020-02-06

var c = document.getElementById("slate")
var ctx = c.getContext("2d")

var cl = document.getElementById("clear");
var tog = document.getElementById("toggle");

var state = 0; // rectangle is 0, cirlce is 1

var clear = function(e){
  ctx.clearRect(0, 0, c.width, c.height);
}

var change_tog = function(e){
  if (state == 0){
    state = 1;
  }
  else{
    state = 0;
  }
}

var add_shape = function(e){
  if (state == 0){
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(e.layerX,e.layerY,100,50);
  }
  else{
    console.log("ellipse");
    ctx.fillStyle = "#FF0000";
    ctx.beginPath(); // no weird shapes
    ctx.ellipse(e.layerX,e.layerY,10, 10, 0, 0, 2 * Math.PI);
    // ellipse is invisible until you fill it!
    ctx.fill();
  }
}

cl.addEventListener('click', clear)
tog.addEventListener('click', change_tog);
c.addEventListener('click', add_shape);
