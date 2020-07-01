function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.draw = function () {
    ctx.fillStyle = "white";
    for (let i = 0; i < this.tail.length; i++){
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function () {
  for (let i = 0; i < this.tail.length - 1; i++){
    this.tail[i] = this.tail[i+1];
  }

  this.tail[this.total - 1 ] = { x: this.x, y: this.y};

  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x === canvas.width){
    this.x = 0;
  }
  else if (this.y === canvas.height) {
    this.y = 0;
  } else if (this.x < 0){
    this.x = canvas.width;
  } else if (this.y < 0){
    this.y = canvas.height;
  }
  }
  this.changeDirection = function (direction) {
    switch (direction) {
      case "ArrowLeft":
        if(!(this.xSpeed === scale && this.ySpeed === 0)){
          this.xSpeed = scale * -1;
          this.ySpeed = 0;
        }
        break;
      case "ArrowRight":
          if (!(this.ySpeed === 0 && this.xSpeed === (-1 * scale))){
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
          }
        break;
      case "ArrowUp":
          if (!(this.ySpeed === (scale * 1) && this.xSpeed === 0) ){
            this.xSpeed = 0;
            this.ySpeed = scale * -1;
          }
        break;
      case "ArrowDown":
          if (!(this.ySpeed === (scale * -1) && this.xSpeed === 0) ){
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
          }
        break;
    }
  }

  this.eat = function (fruit) {
    if (this.x === fruit.x && this.y === fruit.y){
      this.total++;
      return true;
    }
    else {
      return false;
    }
  }

  this.death = function () {
    for (let i = 0; i < this.tail.length; i++){
      if(this.x === this.tail[i].x && this.y === this.tail[i].y){
        this.total = 0;
        this.tail = [];
      }
    }
  }
}
