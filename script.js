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


