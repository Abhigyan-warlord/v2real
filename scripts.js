document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
  
    // Create the circle element
    const circle = document.createElement('div');
    circle.classList.add('cursor-circle');
    document.body.appendChild(circle);
  
    // Update circle position based on mouse movement
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
  
      // Move the circle to follow the cursor
      circle.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  
  // Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/Hide button when scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) { // Show button when scrolled down 200px
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top smoothly when button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to top when 'Home' is clicked in the navigation bar
document.querySelector("a[href='#home']").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default behavior of link
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// JavaScript for Scroll to Services
document.getElementById('scrollToServicesBtn').addEventListener('click', function() {
  document.getElementById('services').scrollIntoView({
    behavior: 'smooth'
  });
});

