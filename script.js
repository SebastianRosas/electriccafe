const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.getElementById('menu-container');
const closeBtn = document.querySelector('.closebutton');
const blurImage = document.getElementById('blur-image');


// MENU

let menuVisible = false;

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', hideMenu); 

function toggleMenu() {
    if (menuVisible) {
        hideMenu();
    } else {
        showMenu();
    }
}

function showMenu() {
    menuContainer.style.top = '0';
    menuVisible = true;
}

function hideMenu() {
    menuContainer.style.top = '-100%';
    menuVisible = false;
}


// BLUR

blurImage.addEventListener('mouseover', () => {
    blurImage.style.filter = 'blur(0)'; 
});

blurImage.addEventListener('mouseout', () => {
    blurImage.style.filter = 'blur(5px)'; 
});
