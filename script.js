const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");
//paddle parameters
const paddleHeight = 10;
const paddleWidth = 140;
let paddleX = (canvas.width - paddleWidth) / 2;
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
let dx = 2.8;
let dy = -2.8;

//second ball movement speed
let dq = 1.7;
let dw = -1.7;
//scoring variables
let score = 0;
//event listener for user controls
//audio variables

//all audio elements are instantiated here
function playr() {
  const myAudio = new Audio("collision.mp3");
  myAudio.play();
}

function playr2() {
  const myAudio = new Audio("game_over.wav");
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

function drawScore() {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#151111";
  ctx.fillText("Score: " + score, 30, 60);
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBallTwo();
  drawBall();
  drawPaddle();
  drawScore();
  x += dx;
  y += dy;

  q += dq;
  w += dw;

  //orange ball collision

  if (q + dq > canvas.width - radiusBall || q + dq < radiusBall) {
    dq = -dq;
  }
  if (w + dw < radiusBall) {
    dw = -dw;
  }
  if (w + dw > canvas.height - radiusBall) {
    if (q > paddleX && q < paddleX + paddleWidth) {
      dw = -dw;
      score++;
      playr2();
    }
  }
  //brown ball collision
  if (x + dx > canvas.width - radiusBall || x + dx < radiusBall) {
    dx = -dx;
  }
  if (y + dy < radiusBall) {
    dy = -dy;
  }
  if (y + dy > canvas.height - radiusBall) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy + -dy * 0.035;
      score = score + 5;
      playr();
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval);
    }
  }

  if (rightPressed) {
    paddleX += 9;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 9;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
}

let interval = setInterval(draw, 10);

//<audio src="collision.mp3" id="myAudioTag"></audio>
