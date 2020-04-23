//Hong Wei Chen
//SoftDev2 pd9
//K14: Ask Circles [Change||Die] While moving etc
//2020-04-01

var svg = document.getElementById('vimage');
var cb = document.getElementById('clear');
var mv = document.getElementById('move');
var xt = document.getElementById('xtra');

var id = 0;

var clear = function(e){
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
  window.cancelAnimationFrame(id);
  id = 0;
}

var draw = function(e){
  if (e.target == svg) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute('r', 10);
    c.setAttribute('fill', 'blue');
    c.setAttribute('dx', 1)
    c.setAttribute('dy', 1)
    c.addEventListener('click', doit);
    svg.appendChild(c);
  }
}

var doit = function(e){
  // if circle is blue (default color)
  if (e.target.getAttribute('fill') == 'blue') {
    e.target.setAttribute("fill", 'red');
  }
  //if circle isnt blue means its been clicked once, thus reset its coords to 'remove' it
  else {
    e.target.setAttribute("cx", Math.floor(Math.random() * 400))
    e.target.setAttribute("cy", Math.floor(Math.random() * 400))
    e.target.setAttribute('fill', 'blue')
  }
}

var move = function(e) {
  //get all circles
  var a = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "circle");
  for (i = 0; i < a.length; i++) {
    //get one circle
    var d = a[i]
    if (parseInt(d.getAttribute("cx")) > 490 || parseInt(d.getAttribute("cx")) < 10) {
      d.setAttribute("dx", -1 * parseInt(d.getAttribute("dx")));
    }
    if (parseInt(d.getAttribute("cy")) > 490 || parseInt(d.getAttribute("cy")) < 10) {
      d.setAttribute("dy", -1 * parseInt(d.getAttribute("dy")));
    }
    d.setAttribute("cx", parseInt(d.getAttribute("cx")) + parseInt(d.getAttribute("dx")));
    d.setAttribute("cy", parseInt(d.getAttribute("cy")) + parseInt(d.getAttribute("dy")));
  }
  id = window.requestAnimationFrame(move)
}

var anim = function(e) {
  if (id == 0) {
    id = window.requestAnimationFrame(move)
  }
}

var xtra = function(e) {
  //reset x coords of all circles and randomizes size
  var a = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "circle");
  for (i = 0; i < a.length; i++) {
    var d = a[i]
    d.setAttribute('cx', Math.floor(Math.random() * 400));
    d.setAttribute('r', Math.floor(Math.random() * 30 + 10));
  }
}

svg.addEventListener('click', draw);
mv.addEventListener('click', anim);
xt.addEventListener('click', xtra);
cb.addEventListener('click', clear);
