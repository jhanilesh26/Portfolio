const colorToggle = document.getElementById('color-toggle');
const root = document.documentElement;

colorToggle.addEventListener('click', () => {
    // Toggle between neon green and blue
    if (root.style.getPropertyValue('--hover-color') === '#1c95cd') {
        root.style.setProperty('--hover-color', '#32c299');
        // Change to neon blue
    } else {
        root.style.setProperty('--hover-color', '#1c95cd'); // Change to neon green
    }
});
//filtering projects//
var mixer = mixitup('.project-gallery');
//reveal transition//
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }

    });
});

const scrollscale = document.querySelectorAll(".scroll-scale");
scrollscale.forEach((el) => observer.observe(el));
const scrollbottom = document.querySelectorAll(".scroll-bottom");
scrollbottom.forEach((el) => observer.observe(el));

//adding active menu wrt section //
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

window.addEventListener("scroll", function() {
    let len = section.length;
    while (--len && window.scrollY + 120 < section[len].offsetTop) {}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
});

//active buttons for project section filterion//

const buttons = document.querySelectorAll('.filter-buttons .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});


//menu fixed//
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50)
});

//menu button toggle//
let menubtn = document.querySelector("#menu-icon");
let navlist = document.querySelector('.nav-list');

menubtn.onclick = () => {
    menubtn.classList.toggle("ri-menu-line");
    menubtn.classList.toggle("ri-close-fill");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menubtn.classList.add("ri-menu-line");
    menubtn.classList.remove("ri-close-fill");
    navlist.classList.remove("open");
}