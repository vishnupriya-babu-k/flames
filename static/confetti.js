// Modify your existing JS files to add event triggering

function createConfetti(colors = ['#89CFF0', '#A5F1E9', '#B0E0E6', '#B0E2FF', '#87CEEB']) {
    const confettiCount = 200;

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.borderRadius = '50%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const startX = Math.random() * window.innerWidth;
        const startY = -10;
        
        confetti.style.left = `${startX}px`;
        confetti.style.top = `${startY}px`;
        
        container.appendChild(confetti);
        
        animateConfetti(confetti);
    }

    setTimeout(() => {
        document.body.removeChild(container);
    }, 5000);
}

function animateConfetti(confetti) {
    const duration = Math.random() * 3000 + 2000;
    
    const keyframes = [
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ];
    
    confetti.animate(keyframes, {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        fill: 'forwards'
    });
}

// Add an event listener to trigger confetti
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission
            
            // Trigger confetti and optionally other effects based on result
            createConfetti();
            
            // Submit form programmatically
            e.target.submit();
        });
    }
});

// Ensure the function is globally available
window.createConfetti = createConfetti;