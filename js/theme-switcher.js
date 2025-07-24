document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    function updateIcons(theme) {
        const icons = document.querySelectorAll('[data-theme-icon-light]');
        icons.forEach(icon => {
            const newSrc = theme === 'dark' 
                ? icon.getAttribute('data-theme-icon-dark')
                : icon.getAttribute('data-theme-icon-light');
            icon.src = newSrc;
        });
    }
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    });
});