
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function () {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();

    window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();
    if (snake.eat(fruit)){
      fruit.pickLocation();
    }


    snake.death();
    document.querySelector('.score').innerText = 'score is '+ snake.total;

  },150);
}());

window.addEventListener('keydown',((evt=> {
  const direction = evt.key;
  snake.changeDirection(direction);
})));
