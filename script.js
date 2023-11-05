document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const boxSize = 20;
    const canvasSize = canvas.width / boxSize;

