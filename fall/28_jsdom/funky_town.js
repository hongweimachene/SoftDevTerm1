//Ayham Alnasser & Hong Wei Chen (Team FALGSC)
//SoftDev1 pd1
//K28 -- Sequential Progression II
//2019 - 12 - 11


var fact = function(n) {
    if(n == 1)
        return 1;
    return (n * fact(n - 1));
};

var fib = function(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
};

var gcd = function(a, b) {
    if (b != 0)
        return gcd(b, a % b);
    return a;
};

var L = ['name0', 'name1', 'name2', 'name3', 'name4']

var randomStudent = function(){
    return L[Math.floor(Math.random() * L.length)];
}

var factHelper = function(){
    console.log(fact(5));
};

var fibHelper = function(){
    console.log(fib(10))
};
var gcdHelper = function(){
    console.log(gcd(192,168));
};
var randomStudentHelper = function(){
    console.log(randomStudent())
}



var factD = document.getElementById('fac')
factD.addEventListener('click', factHelper)

var fibD = document.getElementById('fib')
fibD.addEventListener('click', fibHelper)

var gcdD = document.getElementById('gcd')
gcdD.addEventListener('click', gcdHelper)

var randStudD = document.getElementById('randStud')
randStudD.addEventListener('click', randomStudentHelper)
