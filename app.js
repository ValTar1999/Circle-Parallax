// Function to calculate and apply parallax movement
function applyParallax(e) {
  const circles = document.querySelector('.circles');
  if (!circles) return;

  const circlesRect = circles.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const centerX = circlesRect.left + circlesRect.width / 2;
  const centerY = circlesRect.top + circlesRect.height / 2;

  const moveX = (mouseX - centerX) / circlesRect.width * 100;
  const moveY = (mouseY - centerY) / circlesRect.height * 100;

  circles.style.transform = `translate(${moveX}px, ${moveY}px)`;
}



document.addEventListener('mousemove', applyParallax);

window.addEventListener('scroll', () => {
  const circles = document.querySelector('.circles');
  if (!circles) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const movePercent = Math.min(scrollPercent / 100, 1);

  circles.style.width = `${35 + movePercent * 115}%`;
  circles.style.height = `${35 + movePercent * 115}%`;
  circles.style.top = `${10 - movePercent * 10}%`;
  circles.style.left = `${5 - movePercent * 5}%`;
  circles.style.borderRadius = `${50 - (scrollPercent > 90 ? (scrollPercent - 90) / 10 : 0) * 50}%`;
  circles.style.filter = `blur(${20 - (scrollPercent > 90 ? (scrollPercent - 90) / 10 : 0) * 20}px)`;

  applyParallax({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
});



document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const changePoint = window.innerHeight * 0.1;

  function handleScroll() {
    if (window.scrollY > changePoint) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
});




document.addEventListener('DOMContentLoaded', () => {
  const typingEffect = document.getElementById('typing-effect');
  const texts = ['ТЫ', 'МЫ', 'ВЫ'];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 150;

  function type() {
    const text = texts[index];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    
    typingEffect.textContent = text.substring(0, charIndex);
    
    if (!isDeleting && charIndex === text.length) {
      setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
    
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();
});



function setRandomAnimation() {
  const circles = document.querySelectorAll('.circle2, .circle3, .circle4, .circle5');

  circles.forEach(circle => {
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    const delay = Math.random() * 5; // Random delay between 0s and 5s

    circle.style.animationDuration = `${duration}s`;
    circle.style.animationDelay = `${delay}s`;
  });
}

// Call the function on page load
window.onload = setRandomAnimation;
