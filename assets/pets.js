document.addEventListener("DOMContentLoaded", initialize);

var button = document.getElementById('button');

function initialize(){
  if (annyang) {
    var commands = {

          
          
          'hello': hello,
          'hi': hello,
          '(what) is your name':yourName,
          'my name is :name': myName,
          'do you want to play': walk,
          'what time is it (doggy)': showTime,

          
          'run to the middle': myMove,
          'run back': moveBack,
          'run back to the middle':middleAgain,
          'run to the top right corner': topRight,

    }

    annyang.addCommands(commands);

    button.addEventListener('click', startListening);

    annyang.addCallback('resultNoMatch', resultNoMatch);

  }
}

function startListening(){
  annyang.start();
}

function hello(){
  document.getElementById('time').innerHTML = " Hello! ";
}

function yourName(){
  document.getElementById('time').innerHTML = " My name is Reggie! What is your name?";
}

function myName(name){
  document.getElementById('time').innerHTML = " Hi " +  name + "!";
}

function walk(){


  document.getElementById('time').innerHTML = "Yes!";

  let container = document.getElementById('container');
  
  const onMouseMove = (e) =>{
    container.style.left = e.pageX + 'px';
    container.style.top = e.pageY + 'px';
    container.style.transition = '1s';
  }

  document.addEventListener('mousemove', onMouseMove);

}

function resultNoMatch(){
  document.getElementById('time').innerHTML = " I'm not sure what that means :( ";
  
}



function myMove(){
  var container = document.getElementById('container');
  container.style.top =  "40%";
  container.style.left =  "40%";
  container.style.transition = "3s";
  container.style.transform = "scaleX(1)";
}

function moveBack(){
  var container = document.getElementById('container');
  container.style.top =  "0%";
  container.style.left =  "0%";
  container.style.transition = "3s";
  container.style.transform = "scaleX(-1)";

}

function middleAgain(){
  var container = document.getElementById('container');
  container.style.top =  "40%";
  container.style.left =  "40%";
  container.style.transition = "3s";
  container.style.transform = "scaleX(1)";
}

function topRight(){
  var container = document.getElementById('container');
  container.style.top =  "0%";
  container.style.left =  "80%";
  container.style.transition = "3s";
}


function showTime(){
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    // var s = date.getSeconds();
    var clockUpdateSpeed = 30; 

    document.getElementById('time').innerHTML = "It's " + h +':' + m + '!';
    setTimeout(updateClock, clockUpdateSpeed);
  }
  updateClock();
}








