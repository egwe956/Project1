const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");
//paddle parameters
const paddleHeight = 10;
const paddleWidth = 140;
let paddleX = (canvas.width - paddleWidth) / 2;
//top paddle
let paddleY = (canvas.width - paddleWidth) / 2;
//ball size
const radiusBall = 10;
//canvas parameters
let x = canvas.width / 2;
let y = canvas.height - 30;

let q = canvas.width / 1.8;
let w = canvas.height - 35;
//key mapping parameters
let rightPressed = false;
let leftPressed = false;
//first ball movement speed
let dx = 2.2;
let dy = -2.2;

//second ball movement speed
let dq = 1.3;
let dw = -1.3;
//scoring variables
let redScore = 0;
let blueScore = 0;
//event listener for music controls
// let input = document.getElementById("musicPlayer");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//       event.preventDefault();
//       document.getElementById("myBtn").click();
//   }
// });
//audio variables

//all audio elements are instantiated here
function playr() {
  const myAudio = new Audio("collision.mp3");
  myAudio.play();
}

function instruc() {
  const myAudio = new Audio("main_ost.mp3");
  myAudio.play();
}


function playr2() {
  const myAudio = new Audio("game_over.wav");
  myAudio.play();
}


function ping() {
  const myAudio = new Audio("pling.mp3");
  myAudio.play();
}






// function collisionSound() {
//   //all audio elements are instantiated here
//   let collisionSound =
//     "https://drive.google.com/file/d/1TsFTs8hcoU4KVKkVG2IIzy-qpSbT55ds/view?usp=sharing";
// }
// function gameOverSound() {
//   //all audio elements are instantiated here
//   let gameOverSound =
//     "https://drive.google.com/file/d/1TsFTs8hcoU4KVKkVG2IIzy-qpSbT55ds/view?usp=sharing";
// }
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}
//end of key map controllers

//start of function to allow game music to play
//end of function to allow game music to play

function drawRedScore() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#B50A0A";
  ctx.fillText("Score: " + redScore, 30, 110);
}
function drawBlueScore() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#1D7EEE";
  ctx.fillText("Score: " + blueScore, 30, 60);
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radiusBall, 0, Math.PI * 2);
  ctx.fillStyle = "#403432";
  ctx.fill();
  ctx.closePath();
}

function drawBallTwo() {
  ctx.beginPath();
  ctx.arc(q, w, radiusBall, 0, Math.PI * 2);
  ctx.fillStyle = "#B96F00";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#B50A0A";
  ctx.fill();
  ctx.closePath();
}

function drawTopPaddle() {
  ctx.beginPath();
  ctx.rect(paddleY, 0, paddleWidth, paddleHeight);
  ctx.fillStyle = "#1D7EEE";
  ctx.fill();
  ctx.closePath();
}




function bounce(){
  if (q + dq > canvas.width - radiusBall || q + dq < radiusBall) {
    dq = -dq;
  }
  if (w + dw < radiusBall) {
    dw = -dw;
    blueScore ++
    ping();
  }
  if (x + dx > canvas.width - radiusBall || x + dx < radiusBall) {
    dx = -dx;
  }
  if (y + dy < radiusBall) {
    dy = -dy;
    blueScore = blueScore + 3;
    ping();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bounce();
  drawBallTwo();
  drawBall();
  drawPaddle();
  drawTopPaddle();
  drawRedScore();
  drawBlueScore();
  
  x += dx;
  y += dy;

  q += dq;
  w += dw;


//test codes



  //orange ball collision on blue top paddle

   
    // if (w + dw > canvas.height - radiusBall){
     
    //   if (q > paddleY && q < paddleY + paddleWidth) {
    //     dw = -dw;
    //     blueScore++;
    //     //play collision sound on impact
    //     playr2();
    //   }
    // }
    
   // brown ball collision on blue top paddle
 
    // if (y + dy < 0 - radiusBall) {
    //   if (x > paddleY.height && x < paddleY.height + paddleWidth) {
    //    // dy = -dy;
    //     blueScore = blueScore + 5;
    //    //play collision sound on impact
  
    //     playr();
    //   } 
    // }


  //test code
//   if( y + dy < 0) {
    
//     blueScore = blueScore + 5;
// }


 //orange ball collision on red paddle


if (w + dw > canvas.height - radiusBall) {
  if (q > paddleX && q < paddleX + paddleWidth) {
    dw = -dw;
    redScore++;
    //play collision sound on impact
    playr2();
  }
}
//brown ball collision on red paddle

if (y + dy > canvas.height - radiusBall) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy + -dy * 0.028;
    redScore = redScore + 5;
   //play collision sound on impact

    playr();
  } else {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
   }
}






 

  if (rightPressed) {
    paddleY += 9;
    if (paddleY + paddleWidth > canvas.width) {
      paddleY = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleY -= 9;
    if (paddleY < 0) {
      paddleY = 0;
    }
  }
}

let interval = setInterval(draw, 10);







