let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("nav");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}