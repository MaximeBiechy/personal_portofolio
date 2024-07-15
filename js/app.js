document.addEventListener('DOMContentLoaded', function () {
  // Call functions
  applyPreferredTheme();
  updateIconFilters();

  // Event listeners
  themeToggle.addEventListener('click', toggleTheme);
  burgerIcon.addEventListener('click', openNavigation);
  closeButtonIcon.addEventListener('click', closeNavigation);
  backdrop.addEventListener('click', closeNavigation);
  window.addEventListener('resize', resetNavDisplay);
  navLinks.forEach(link => link.addEventListener('click', closeNavigationOnLinkClick));
});

// Constants for DOM elements
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleIcon = document.querySelector('.theme-toggle img');
const burgerIcon = document.getElementById('menu-burger-icon');
const closeButtonIcon = document.getElementById('close-button-icon');
const navigation = document.querySelector('.navigation');
const backdrop = document.getElementById('backdrop');
const navLinks = document.querySelectorAll('.nav-links');
const LogoUniversityLorraine = document.getElementById('LogoUniversityLorraine');

function updateThemeIcon() {
  themeToggleIcon.src = document.body.classList.contains('dark-theme') ?
    'icons/Name=icon-light-mode, Size=24, Theme Mode=Dark.svg' :
    'icons/Name=icon-dark-mode, Size=24, Theme Mode=Light.svg';
}

function updateImageSources() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.src = document.body.classList.contains('dark-theme') ?
      img.src.replace('Theme%20Mode=Light.svg', 'Theme%20Mode=Dark.svg') :
      img.src.replace('Theme%20Mode=Dark.svg', 'Theme%20Mode=Light.svg');
  });
}

function updateIconFilters() {
  const iconDarkElements = document.querySelectorAll('.icon-dark');
  iconDarkElements.forEach(icon => {
    icon.style.filter = document.body.classList.contains('dark-theme') ? 'invert(1)' : 'invert(0)';
  });

  LogoUniversityLorraine.src.replace('Theme%20Mode=Light.svg', 'Theme%20Mode=Dark.svg');


}

function savePreferredTheme() {
  const preferredTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('preferredTheme', preferredTheme);
  document.body.setAttribute('data-theme', preferredTheme);
}

function applyPreferredTheme() {
  const preferredTheme = localStorage.getItem('preferredTheme');
  if (preferredTheme) {
    document.body.classList.toggle('dark-theme', preferredTheme === 'dark');
    document.body.setAttribute('data-theme', preferredTheme);
    updateImageSources();
    updateThemeIcon();
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  updateImageSources();
  updateThemeIcon();
  updateIconFilters();
  savePreferredTheme();
}

function openNavigation() {
  navigation.classList.add('open');
  burgerIcon.style.display = 'none';
  closeButtonIcon.style.display = 'block';
  backdrop.classList.add('open');
}

function closeNavigation() {
  navigation.classList.remove('open');
  burgerIcon.style.display = 'block';
  closeButtonIcon.style.display = 'none';
  backdrop.classList.remove('open');
}

function closeNavigationOnLinkClick() {
  navigation.classList.remove('open');
  backdrop.classList.remove('open');
  if (window.innerWidth <= 768) {
    burgerIcon.style.display = 'block';
    closeButtonIcon.style.display = 'none';
  }
}

function resetNavDisplay() {
  if (window.innerWidth > 768) {
    navigation.classList.remove('open');
    burgerIcon.style.display = 'none';
    closeButtonIcon.style.display = 'none';
    backdrop.classList.remove('open');
  } else {
    burgerIcon.style.display = 'block';
    closeButtonIcon.style.display = 'none';
  }
}
