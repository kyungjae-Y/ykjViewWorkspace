const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let key = {
  right: false,
  left: false,
  up: false,
  down: false,
};

let player = {
  x: 150,
  y: 150,
  size: 50,
  color: 'blue',
}

let enemy = {
  x: canvas.width / 2 - 40,
  y: canvas.height / 2 - 40,
  size: 80,
  color: 'green',
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.size, player.size);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
  movePlayer();
  checkColor();
  drawEnemy();
}

function drawEnemy() {
  ctx.beginPath();
  ctx.rect(enemy.x, enemy.y, enemy.size, enemy.size);
  ctx.fillStyle = enemy.color;
  ctx.fill();
  ctx.closePath();
}

function checkColor() {
  if (player.x + player.size >= enemy.x && player.x <= enemy.x + enemy.size &&
    player.y + player.size >= enemy.y && player.y <= enemy.y + enemy.size) {
    enemy.color = 'red';
  } else {
    enemy.color = 'green';
  }
}

function movePlayer() {
  if (key.right && player.x < canvas.width - player.size) {
    player.x += 5;
  } else if (key.down && player.y < canvas.height - player.size) {
    player.y += 5;
  } else if (key.up && player.y > 0) {
    player.y -= 5;
  } else if (key.left && player.x > 0) {
    player.x -= 5;
  }
}

// 키 다운할때는 사각형 움직이고 draw()
document.addEventListener("keydown", e => {
  if (e.keyCode === 39 || e.key === 'ArrowRight') {
    key.right = true;
  } else if (e.keyCode === 40 || e.key === 'ArrowDown') {
    key.down = true;
  } else if (e.keyCode === 38 || e.key === 'ArrowUp') {
    key.up = true;
  } else if (e.keyCode === 37 || e.key === 'ArrowLeft') {
    key.left = true;
  }
})

// 키 업일때는 사각형 안움직인다 
document.addEventListener("keyup", e => {
  if (e.keyCode === 39 || e.key === 'ArrowRight') {
    key.right = false;
    //if (x < canvas.width - size) x += 5;
  } else if (e.keyCode === 40 || e.key === 'ArrowDown') {
    key.down = false;
    // if (y < canvas.height - size) y += 5;
  } else if (e.keyCode === 38 || e.key === 'ArrowUp') {
    //if (y > 0) y -= 5;
    key.up = false;
  } else if (e.keyCode === 37 || e.key === 'ArrowLeft') {
    //if (x > 0) x -= 5;
    key.left = false;
  }
})
setInterval(draw, 10)