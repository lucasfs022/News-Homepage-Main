const menuMobile = document.querySelector('.menu-mobile');
const openbtn = document.querySelector(".toggle");
const closebtn = document.querySelector(".close-icon");
const overlay = document.querySelector('.overlay');


// sidebar toggle
const toggleMobile = () => {
    menuMobile.classList.toggle('sidebar-open')
}

const toggleOverlay = () => {
  overlay.classList.toggle("show-overlay");
};

// openbtn.onclick = toggleMobile;
// closebtn.onclick = toggleMobile;
// openbtn.onclick = toggleOverlay;
// closebtn.onclick = toggleOverlay;

openbtn.addEventListener('click', () => {
    toggleMobile();
    toggleOverlay();
})

closebtn.addEventListener("click", () => {
  toggleMobile();
  toggleOverlay();
});

// end of sidebar toggle
