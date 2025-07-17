document.addEventListener('DOMContentLoaded', function() {
    // Создаем воздушные шарики
    createBalloons(15);
    
    // Создаем конфетти
    createConfetti(50);
    
    // Обработчик кнопки
    const wishButton = document.getElementById('wishButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    wishButton.addEventListener('click', function() {
        hiddenMessage.style.display = 'block';
        createHearts(20);
        launchFireworks(5);
        this.style.display = 'none';
        
        // Анимация текста
        const paragraphs = hiddenMessage.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            setTimeout(() => {
                p.style.animation = 'bounce 0.5s';
                setTimeout(() => {
                    p.style.animation = '';
                }, 500);
            }, index * 300);
        });
    });
    
    // Эффект при наведении на поздравление
    const card = document.querySelector('.birthday-card');
    card.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        card.style.transform = `rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 10}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = '';
    });
    
    // Создаем летающие сердца при клике в любом месте
    document.addEventListener('click', function(e) {
        if (e.target !== wishButton) {
            createHearts(3, e.clientX, e.clientY);
        }
    });
});

function createBalloons(count) {
    const container = document.getElementById('balloons-container');
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#a29bfe', '#fd79a8'];
    
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // Случайные свойства
        const size = Math.random() * 30 + 30;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5;
        
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.3}px`;
        balloon.style.background = color;
        balloon.style.left = `${left}%`;
        balloon.style.animationDelay = `${delay}s`;
        balloon.style.animationDuration = `${duration}s`;
        
        // Добавляем ниточку к шарику
        balloon.innerHTML = `<div style="position:absolute; bottom:-15px; left:50%; width:2px; height:15px; background:#333; transform:translateX(-50%);"></div>`;
        
        container.appendChild(balloon);
        
        // Удаляем шарик после анимации
        setTimeout(() => {
            balloon.remove();
        }, duration * 1000);
    }
    
    // Создаем новые шарики каждые 3 секунды
    setTimeout(() => createBalloons(count), 3000);
}

function createConfetti(count) {
    const container = document.body;
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Случайные свойства
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        const shape = Math.random() > 0.5 ? '50%' : '0';
        
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.background = color;
        confetti.style.left = `${left}%`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.borderRadius = shape;
        
        container.appendChild(confetti);
        
        // Удаляем конфетти после анимации
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
    
    // Создаем новые конфетти каждые 2 секунды
    setTimeout(() => createConfetti(count), 2000);
}

function createHearts(count, x, y) {
    const container = document.body;
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        
        // Позиционирование
        const posX = x || Math.random() * window.innerWidth;
        const posY = y || window.innerHeight;
        
        heart.style.left = `${posX}px`;
        heart.style.top = `${posY}px`;
        
        // Случайные параметры анимации
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        container.appendChild(heart);
        
        // Удаляем сердце после анимации
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

function launchFireworks(count) {
    const container = document.body;
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight / 2;
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;
            firework.style.background = color;
            firework.style.boxShadow = `0 0 10px 5px ${color}`;
            
            container.appendChild(firework);
            
            // Удаляем фейерверк после анимации
            setTimeout(() => {
                firework.remove();
                createMiniExplosion(x, y, color);
            }, 1000);
        }, i * 300);
    }
}

function createMiniExplosion(x, y, color) {
    const container = document.body;
    const particles = 12;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti';
        
        const angle = (i / particles) * Math.PI * 2;
        const distance = Math.random() * 50 + 50;
        const duration = Math.random() * 1 + 0.5;
        
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = color;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animation = `none`;
        
        container.appendChild(particle);
        
        // Анимация частиц
        const startTime = Date.now();
        const animate = () => {
            const time = (Date.now() - startTime) / 1000;
            const progress = time / duration;
            
            if (progress >= 1) {
                particle.remove();
                return;
            }
            
            const currentDistance = distance * (1 - progress);
            const currentX = x + Math.cos(angle) * currentDistance;
            const currentY = y + Math.sin(angle) * currentDistance - 100 * progress * progress;
            const opacity = 1 - progress;
            
            particle.style.transform = `translate(${currentX - x}px, ${currentY - y}px)`;
            particle.style.opacity = opacity;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    }
}