class Bullet {
  constructor() {
    this.radius = 7;
    this.speed = 2;
    this.x;
    this.y;
    this.dx;
    this.dy;
    // 캔버스크기 
    this.color = "green";
    this.cwidth = 800;
    this.cheight = 400;
  }

  init(px, py) {
    // 동서남북 4개의 방향에서 랜덤으로 총알이 나온다 
    let location = parseInt(Math.random() * 4);
    if (location == 0) {
      this.x = Math.random() * (this.cwidth - this.radius);
      this.y = this.radius;
    } else if (location == 1) {
      this.x = Math.random() * (this.cwidth - this.radius);
      this.y = this.cheight - this.radius;
    } else if (location == 2) {
      this.x = this.radius;
      this.y = Math.random() * (this.cheight - this.radius);
    } else if (location == 3) {
      this.x = this.cwidth - this.radius;
      this.y = Math.random() * (this.cheight - this.radius);
    }
    // render 기준으로 플레이어값 가져오기 
    let dx = px - this.x;
    let dy = py - this.y;
    // 공과 플레이어의 거리 
    let c = Math.sqrt(dx * dx + dy * dy);
    // 바로 플레이어 위치로 가면 플레이어가 바로 죽기 때문에 조금씩 이동 
    this.dx = dx / c;
    this.dy = dy / c;
  }

  update(px, py) {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
    // 화면 밖으로 나갔을때 
    if (this.x < -this.radius || this.y < -this.radius || this.x > this.cwidth + this.radius || this.y > this.cheight + this.radius) {
      this.init(px, py);
    }
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  isCollision(px, py, size) {
    // 현재 플레이어랑 총알거리값
    let pdx = this.x - px;
    let pdy = this.y - py;
    let pdc = pdx * pdx + pdy * pdy;
    return (size + this.radius) ** 2 > pdc;
  }
}