//Hong Wei Chen
//Softdev pd9
//K13 -- Ask Cirlces [Change || Die]
//2020-03-31

var svg = document.getElementById('vimage');
var cb = document.getElementById('clear');


var clear = function(e){
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
}

var draw = function(e){
  if (e.target == svg) { //if clicking on empty space
    //create a circle
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute('r', 10);
    c.setAttribute('fill', 'blue');
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

svg.addEventListener('click', draw);
cb.addEventListener('click', clear);
