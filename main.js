/* ========================= menu icon ========================= */

let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
console.log(navbar)

menuicon.onclick = () => {
  menuicon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/* ========================= scroll to section ========================= */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach ((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/* ========================= sticky header ========================= */
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

/* ========================= remove toggle icon and navbar  ========================= */

menuicon.classList.remove('fa-xmark')
navbar.classList.remove('active')

/* ========================= scroll reveal ========================= */

ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'left'})
ScrollReveal().reveal('.home-img , services-container, .portfolio-box, .contact form ', {origin: 'right'})
ScrollReveal().reveal('.about-content, .heading' , {origin: 'left'})
ScrollReveal().reveal('.about-img', {origin: 'right'})
ScrollReveal().reveal('.services-content, .services-box, .heading', {origin: 'top'})
ScrollReveal().reveal('.services-img', {origin: 'right'})


/*======================Typed Js ======================*/

const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Mern Developer', 'Web Designer'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
})

/*====================== Contact Form =======================*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const formData = new FormData(form);
  const statusElement = document.getElementById('form-status');
  const submitButton = document.getElementById('submit-btn'); // Added this line

  // Show loading indicator
  submitButton.value = 'Sending...'; // Added this line
  submitButton.disabled = true; // Added this line

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      statusElement.innerText = 'Email Sent';
    } else {
      statusElement.innerText = 'Failed to send email';
    }
  })
  .catch(error => {
    statusElement.innerText = 'An error occurred';
  })
  .finally(() => {
    // Revert button text and enable it
    submitButton.value = 'Send Message'; // Added this line
    submitButton.disabled = false; // Added this line
  });
});