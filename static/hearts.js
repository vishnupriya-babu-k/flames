function createHearts() {
    const heartCount = 50;
    const colors = ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA'];

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        const startX = Math.random() * window.innerWidth;
        const startY = -50;
        
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        
        container.appendChild(heart);
        
        animateHeart(heart);
    }

    setTimeout(() => {
        document.body.removeChild(container);
    }, 5000);
}

function animateHeart(heart) {
    const duration = Math.random() * 3000 + 2000;
    
    const keyframes = [
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ];
    
    heart.animate(keyframes, {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        fill: 'forwards'
    });
}

// Add an event listener to trigger hearts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission
            
            // Determine which result to trigger hearts for
            const resultInput = document.getElementById('result-value');
            if (resultInput) {
                const result = resultInput.value.toLowerCase();
                if (['lovers', 'affection', 'marriage'].includes(result)) {
                    createHearts();
            }
            }
            
            // Submit form programmatically
            e.target.submit();
        });
    }
});

// Ensure the function is globally available
window.createHearts = createHearts;