var ROWS = 50, COLS = 50;
var snake = [];
var SNAKE_INITIAL_LENGTH = 10;
var score = SNAKE_INITIAL_LENGTH;
var speed = {
  x: 1,
  y: 0
};
var GAME_SPEED = 66;
var playing = true;
var fruit;
var newSpeed = false;

function newFruit() {
  do {
    fruit = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS)
    };
  } while (onSnake(fruit));
}

function init() {
  for (var i = 0; i < SNAKE_INITIAL_LENGTH; i++) {
    snake.push({
      x: Math.floor(COLS / 2) -i,
      y: Math.floor(ROWS / 2)
    });
  }
  newFruit();
}

function lose() {
  playing = false;
};

function inBoard(position) {
  return position.x >= 0
      && position.y >= 0
      && position.x < COLS
      && position.y < ROWS;
}

function onSnake(position) {
  for (var i = 0; i < snake.length; i++) {
    if (position.x == snake[i].x
     && position.y == snake[i].y) {
      return true;
     }
  }
  return false;
}

function integrate() {
  var head = snake[0];

  if (newSpeed !== false) {
    speed = newSpeed;
    newSpeed = false;
  }

  var dx = speed.x,
      dy = speed.y;
  var newPosition = {
      x: head.x + dx,
      y: head.y + dy
  };

  if (playing) {
    if (!inBoard(newPosition) || onSnake(newPosition)) {
      lose();
      return;
    }

    var scoreElement = document.getElementById('score');
    scoreElement.innerHTML = 'SCORE: ' + score;

    snake.unshift(newPosition);

    if (newPosition.x == fruit.x
     && newPosition.y == fruit.y) {
        score++;
        newFruit();
    }
    else {
    snake.pop();
    }
  }

  setTimeout(integrate, GAME_SPEED);
}

init();
integrate();
