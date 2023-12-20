const animBlock = document.querySelector(".animation-block");
const showAnimBlock = document.querySelector(".play-anim");
const closeAnimBlock = document.querySelector(".close-anim");

const animBox = document.querySelector(".anim-box");
const playBtn = document.querySelector(".play-square");
const stopBtn = document.querySelector(".stop-square");
const reloadBtn = document.querySelector(".reload-square");

showAnimBlock.addEventListener("click", () => {
  animBlock.style.display = "block";
});
closeAnimBlock.addEventListener("click", () => {
  animBlock.style.display = "none";
});

window.onload = function () {
  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");
  var lastframe = 0;
  var level = {
    x: 0,
    y: 0,
    width: canvas.width - 0,
    height: canvas.height - 0,
  };
  var square = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    xdir: 0,
    ydir: 0,
    speed: 0,
  };

  function init() {
    square.width = 10;
    square.height = 5;
    square.x = 290;
    square.y = 0;
    square.xdir = 1;
    square.ydir = 1;
    square.speed = 200;

    drawFrame();
    context.fillStyle = "green";
    context.fillRect(square.x, square.y, square.width, square.height);

    playBtn.addEventListener("click", startBouncing);
  }

  function startBouncing() {
    main(0);
  }

  function main(tframe) {
    window.requestAnimationFrame(main);
    update(tframe);
    render();
  }

  function update(tframe) {
    var dt = (tframe - lastframe) / 1000;
    lastframe = tframe;

    square.x += dt * square.speed * 1.2 * square.xdir;
    square.y += dt * square.ydir;

    if (square.x <= level.x) {
      square.xdir = 1;
      square.x = level.x;
    } else if (square.x + square.width >= level.x + level.width) {
      square.xdir = -1;
      square.x = level.x + level.width - square.width;
    }

    if (square.y <= level.y) {
      square.ydir = 1;
      square.y = level.y;
    } else if (square.y + square.height >= level.y + level.height) {
      square.ydir = -1;
      square.y = level.y + level.height - square.height;
    }
  }

  function render() {
    drawFrame();
    context.fillStyle = "green";
    context.fillRect(square.x, square.y, square.width, square.height);
  }

  function drawFrame() {
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#fff";
    context.fillRect(1, 1, canvas.width - 2, canvas.height - 2);
  }

  init();
};
