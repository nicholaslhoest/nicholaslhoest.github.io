document.addEventListener('DOMContentLoaded', function () {
    createFallingSquare();
});

function openLinkedIn() {
    // Add logic to open LinkedIn profile
    window.open('https://www.linkedin.com/in/nicholasblhoest/','_blank');
}

function createFallingSquare() {
    const numSquares = 28; // You can adjust the number of squares
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('falling-square');

        const size = Math.floor(Math.random() * 100) + 10; // Random size between 10 and 110
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        const speed = Math.floor(Math.random() * 5) + 1; // Random speed between 1 and 6
        square.style.animationDuration = `${size / speed}s`;

        const position = Math.random() * 100; // Random horizontal position
        square.style.left = `${position}vw`;

        const opacity = Math.random(); // Random opacity between 0 and 1
        square.style.opacity = opacity;

        document.getElementById('falling-squares-container').appendChild(square);
    }
}
