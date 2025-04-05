document.addEventListener('DOMContentLoaded', function() {
    // Конфетти
    const confettiSettings = { 
        target: 'confetti-container',
        max: 150,
        size: 1.5,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[255,107,107], [255,204,92], [136,216,176], [66,165,245]],
        clock: 25,
        rotate: true,
        start_from_edge: true,
        respawn: true
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    // Фоновая музыка
    const music = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    let isPlaying = false;
    
    // Попытка автоматического воспроизведения с задержкой
    setTimeout(() => {
        music.volume = 0.3;
        const playPromise = music.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                isPlaying = true;
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            })
            .catch(error => {
                isPlaying = false;
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            });
        }
    }, 1000);
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            music.play();
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Плавающая анимация для фото
    const photos = document.querySelectorAll('.photo-item');
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.classList.add('floating');
        });
        
        photo.addEventListener('mouseleave', function() {
            this.classList.remove('floating');
        });
    });
});