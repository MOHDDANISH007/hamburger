const hamburgerIcon = document.querySelector('.hamburger-menu');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');

// Open the menu when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open');
    closeIcon.classList.add('visible'); // Show the close button
  
});

// Close the menu when the close icon is clicked
closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open');
    closeIcon.classList.remove('visible'); // Hide the close button
});


