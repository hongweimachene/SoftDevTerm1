// Hong Wei Chen
// Softdev pd9
// K12: DotConn 2: Electric Boogaloo
// 2020-03-26

var svg = document.getElementById("vimage");
var cb = document.getElementById("clear")
//stores coords
var coords = []

var clear = function(e) {
  while (svg.lastChild) { //while svg contains elements
    svg.removeChild(svg.lastChild); //removes elements
  }
  //empties all coords
  coords = []
}

var draw = function(e) {
  //adds new coords every click
  coords.push([e.offsetX, e.offsetY]);
  //creates a new element and set its attributes (circle)
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", "10");
  //adds element to svg
  svg.appendChild(c);
  //creates a new element (line)
  var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
  //if first dot is drawn
  if (coords.length > 1) {
    //sets parameters to draw line
    l.setAttribute("x1", e.offsetX);
    l.setAttribute("y1", e.offsetY);
    l.setAttribute("x2", coords[0][0]);
    l.setAttribute("y2", coords[0][1]);
    l.setAttribute("stroke", "black")
    svg.appendChild(l);
    coords.shift(); //pop coords of previous click
  }
}

svg.addEventListener('click', draw);
cb.addEventListener('click', clear);
