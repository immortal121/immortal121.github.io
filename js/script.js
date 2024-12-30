// toggle links
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// active links js
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /* sticky navbar */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  // remove sidebar on click
  menuIcon.classList.remove("bx-x");
  // scroll effect
};

const words = [
  "🤖 AI Expert",
  "🌐 Full Stack Developer",
  "📱 Mobile App Developer",
  "🐐 Entrepreneur",
];
let i = 0;
let isTyping = false; // Flag to track typing state

function typeWriter() {
  const typingElement = document.querySelector(".typing-text");
  typingElement.innerHTML = "";

  let word = words[i];
  let j = 0;
  isTyping = true; // Set typing flag to true

  const intervalId = setInterval(() => {
    typingElement.innerHTML += word[j];
    j++;

    if (j >= word.length) {
      clearInterval(intervalId);
      setTimeout(() => {
        i = (i + 1) % words.length;
        setTimeout(() => {
          typeWriter();
        }, 1000); // Delay before starting the next word
      }, 2000); // Delay before removing cursor
      isTyping = false; // Set typing flag to false
    }
  }, 50);
}

// Function to toggle cursor visibility
function toggleCursor() {
  const cursor = document.querySelector(".cursor");
  cursor.style.visibility = isTyping ? "visible" : "hidden";
}

// Initial call and cursor interval
typeWriter();
setInterval(toggleCursor, 500); // Toggle cursor every 500ms
