//Hong Wei Chen
//Softdev1 p1
//K27 -- Sequential Progression
//2019-12-11


var fact = function(n){
  if (n < 2)
    return 1;
  return (n * fact(n-1));
};

var fib = function(n){
  if (n < 2)
    return n;
  return (fib(n-1) + fib(n-2));
};

var gcd = function (a,b){
  if (b != 0)
    return (gcd(b, a % b));
  return a;
};

var randomStudent = function(){
  names = ['freaf', 'fop', 'yeaher', 'hoop'];
  return names[Math.floor(Math.random() * names.length)];
};
