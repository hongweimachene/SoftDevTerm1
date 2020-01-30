//Hong Wei Chen and Yifan Wang (Team Ricebowl)
//Softdev1 pd1
//K28 -- Sequential Progession III: Season of the Witch
//2019-12-12

var changeHeading = function(e) {
  //select heading
  var h = document.getElementById('h');
  //if mouse is over an element of the list change the heading to it, else default display 'Hello World!'
  if (e.type === 'mouseover') {
    h.innerHTML = e.target.innerHTML;
  } else {
    h.innerHTML = 'Hello World!';
  }
};

//remove element from a list
var removeItem = function(e) {
  console.log('removed item')
  e.target.remove();
};

//select elements in the list
var lis = document.getElementsByTagName('li');

//adds interactive functions to elements in list
for (var i = 0; i < lis.length; i++){
  //hover over list to display in heading
  lis[i].addEventListener('mouseover', changeHeading);
  lis[i].addEventListener('mouseout', changeHeading);
  //click to remove element from list
  lis[i].addEventListener('click', removeItem);
}

var addItem = function(e) {
  console.log('added new item')
  //select the list
  var list = document.getElementById('thelist');
  //create new element default display 'WORD'
  var item = document.createElement('li');
  item.innerHTML = 'WORD';
  //apply functions to new element
  item.addEventListener('mouseover', changeHeading);
  item.addEventListener('mouseout', changeHeading);
  item.addEventListener('click', removeItem);
  //add to list
  list.appendChild(item);
};

//select button allow it to add new item upon click
var button = document.getElementById('b');
button.addEventListener('click', addItem);

//fib func
var fib = function(n) {
  if (n < 2) return n;
  return fib(n-1) + fib(n-2);
};

//fib counter
var fib1count = 0;
var addFib = function(e){
  console.log('added next term in fibonacci sequence');
  //select fib list
  var list = document.getElementById('fiblist');
  //create new line
  var item = document.createElement('li');
  //add fib
  item.innerHTML = fib(fib1count);
  list.appendChild(item);
  fib1count++;
};

//dynamic programming fib function
var fibDP = [0,1];
var fib2 = function(n) {
  if (n < 2) {
    return fibDP[n];
  } else {
    fibDP.push(fibDP[n-1] + fibDP[n-2]);
    return fibDP[n];
  }
}

//fib counter
var fib2count = 0;
var addFib2 = function(e){
  console.log('added next term in fibonacci sequence');
  //select fib list
  var list = document.getElementById('fiblist');
  //create new line
  var item = document.createElement('li');
  //add fib
  item.innerHTML = fib2(fib2count);
  list.appendChild(item);
  fib2count++;
}

var fb = document.getElementById('fb');
fb.addEventListener('click', addFib);

//triangular number series
var triangle = function(n) {
  return n * (n + 1) / 2;
}

var triCount = 1;
var addTri = function(e) {
  console.log('added next term in triangular number series');
  //append to new triangle number series list
  var list = document.getElementById('trilist');
  var item = document.createElement('li');
  item.innerHTML = triangle(triCount);
  list.appendChild(item);
  triCount++;
}

var trian = document.getElementById('tri');
trian.addEventListener('click', addTri);
