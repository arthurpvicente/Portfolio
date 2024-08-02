let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('heder nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Validate email
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function (event) {
        const email = emailInput.value;
        const emailRegex = (/^\w*(\.\w*)?@[a-z].[a-z]+(\.[a-z]+)?$/);

        if (!emailRegex.test(email)) {
            alert('Email is not valid');
            event.preventDefault(); 
        } else {
            alert('Email is valid');
        }
    });
});