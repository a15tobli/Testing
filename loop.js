var canvas = document.getElementById("testCanvas");
var ctx = canvas.getContext('2d');
var dx = -2;
var dy = -3;
function drawCanvas(){
  updateGame();
}
function updateGame(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle="#385";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawRectangle();
  console.log("Test");
  requestAnimationFrame(updateGame);
}

var y = canvas.height-150;
var x = canvas.width-150;
function drawRectangle(){
  ctx.beginPath();
  ctx.rect(x, y, 150, 150);
  ctx.stroke();
  ctx.closePath();
  if(x+150 + dx > canvas.width || x + dx < 0) {
    dx = -dx;
}

if(y+150 + dy > canvas.height || y + dy < 0) {
    dy = -dy;
}
x += dx;
y += dy;
}
