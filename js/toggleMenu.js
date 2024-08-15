const themeToggleBtn = document.getElementById('toggle-theme');
const themeToggleImage = themeToggleBtn.querySelector('img');

const lightModeImage = './images/mode-light-svgrepo-com.svg';
const darkModeImage = './images/mode-dark-svgrepo-com.svg';

function updateThemeIcon(isDarkMode) {
    themeToggleImage.src = !isDarkMode ? darkModeImage : lightModeImage;
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    const isDarkMode = document.body.classList.contains('dark');
    updateThemeIcon(isDarkMode);
});
