//Hong Wei Chen and Yifan Wang (Team Ricebowl)
//Softdev1 pd1
//K28 -- Sequential Progession III: Season of the Witch
//2019-12-12

var changeHeading = function(e) {
  var h = document.getElementByID('h')
  h.innerHTML =
};

var removeItem = function(e) {
  var f =
};

var lis = document.getElementByTagName('li');

for (var i = 0; i < lis.length; i++){
  lis[i].addEventListener('mouseover', changeHeading)
}

var addItem = function(e) {
  var list =
  var item = document.createElement('li');

};

var button = document.getElementByID('b');

var fib = function(n) {
  if (n < 2) return 1;
  return fib(n-1) + fib(n-2);
};

var addFib = function(e){
  console.log(e);

};

var addFib2 = function(e){
  console.log(e);

}

var fb = document.getElementByID('fb')
fb.addEventListener('click', addFib);
