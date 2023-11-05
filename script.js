document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const boxSize = 20;
    const canvasSize = canvas.width / boxSize;
    let snake = [{x: 10, y: 10}];
    let food = {x: Math.floor(Math.random() * canvasSize), y: Math.floor(Math.random() * canvasSize)};
    let direction = 'right';
    let score = 0;
    let timer = 0;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
               color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = (i === 0) ? 'green' : 'white';
            ctx.fillRect(snake[i].x * boxSize, snake[i].y * boxSize, boxSize, boxSize);

            ctx.strokeStyle = 'black';
            ctx.strokeRect(snake[i].x * boxSize, snake[i].y * boxSize, boxSize, boxSize);
        } 
         ctx.fillStyle = food.color;
        ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
    }

    function update() {
        const headX = snake[0].x;
        const headY = snake[0].y;

        if (direction === 'right') headX++;
        if (direction === 'left') headX--;
        if (direction === 'up') headY--;
        if (direction === 'down') headY++;
    const newHead = {x: headX, y: headY};

        if (headX === food.x && headY === food.y) {
            food = {x: Math.floor(Math.random() * canvasSize), y: Math.floor(Math.random() * canvasSize)};
            food.color = getRandomColor();
            score++;
        } else {
            snake.pop();
        }

        snake.unshift(newHead);
    }

    function checkCollision() {
        const head = snake[0];
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                clearInterval(game);
                alert('Game Over! Pontuação: ' + score);
            }
        }

        if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
            clearInterval(game);
            alert('Game Over! Pontuação: ' + score);
        }
    }
function updateTimer() {
        timer++;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        document.getElementById('timer').textContent = ${minutes}:${String(seconds).padStart(2, '0')};
    }

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 37 && direction !== 'right') direction = 'left';
        if (e.keyCode === 38 && direction !== 'down') direction = 'up';
        if (e.keyCode === 39 && direction !== 'left') direction = 'right';
        if (e.keyCode === 40 && direction !== 'up') direction = 'down';
    });

    const game = setInterval(() => {
        update();
        checkCollision();
        draw();
        updateTimer();
    }, 1000);
 setInterval(updateTimer, 1000);
});

        
    



