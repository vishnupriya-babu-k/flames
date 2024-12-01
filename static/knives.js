function createKnives() {
    const knifeCount = 30;
    const colors = ['#808080', '#A9A9A9', '#708090', '#C0C0C0'];

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < knifeCount; i++) {
        const knife = document.createElement('div');
        knife.innerHTML = '🔪';
        knife.style.position = 'absolute';
        knife.style.fontSize = `${Math.random() * 20 + 10}px`;
        knife.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        const startX = Math.random() * window.innerWidth;
        const startY = -50;
        
        knife.style.left = `${startX}px`;
        knife.style.top = `${startY}px`;
        
        container.appendChild(knife);
        
        animateKnife(knife);
    }

    setTimeout(() => {
        document.body.removeChild(container);
    }, 5000);
}

function animateKnife(knife) {
    const duration = Math.random() * 2500 + 1500;
    
    const keyframes = [
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${Math.random() * 250 - 125}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ];
    
    knife.animate(keyframes, {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        fill: 'forwards'
    });
}

// Add an event listener to trigger knives
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission
            
            // Determine which result to trigger knives for
            const resultCard = document.querySelector('.result-card');
            if (resultCard) {
                const result = resultCard.textContent.toLowerCase();
                if (['enemies', 'enemies'].some(keyword => result.includes(keyword))) {
                    createKnives();
                }
            }
            
            // Submit form programmatically
            e.target.submit();
        });
    }
});

// Ensure the function is globally available
window.createKnives = createKnives;