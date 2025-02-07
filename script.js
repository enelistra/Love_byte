// Welcome Pop-up
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('welcome-popup');
  const closeBtn = document.getElementById('close-popup');

  // Show pop-up on page load
  popup.style.display = 'flex';

  // Close pop-up on button click
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

// Background Animation
const background = document.getElementById('background-animation');
const colors = ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];
let currentIndex = 0;

setInterval(() => {
  background.style.background = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}, 3000);

// Falling Flowers Animation
function createFallingFlower() {
  const flower = document.createElement('div');
  flower.classList.add('falling-flower');
  flower.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  flower.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random fall speed
  flower.style.backgroundImage = `url('flower.png')`; // Random flower image
  document.body.appendChild(flower);

  // Remove flower after it falls
  setTimeout(() => {
    flower.remove();
  }, 10000); // Match the duration of the fall animation
}

// Create falling flowers every 500ms
setInterval(createFallingFlower, 500);

// Wind Effect
function applyWindEffect() {
  const shakeElements = document.querySelectorAll('.shake');
  shakeElements.forEach(element => {
    element.style.transform = `translateX(${Math.random() * 10 - 5}px)`;
  });
}

// Apply wind effect every 100ms
setInterval(applyWindEffect, 100);

// Music Toggle Button
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

musicToggle.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggle.textContent = '🎵 Pause Music';
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = '🎵 Play Music';
  }
});

// Disable Right-Click
document.addEventListener('contextmenu', (e) => {
  e.preventDefault(); // Prevent the default right-click menu
  alert("Right-click is disabled on this page."); // Optional: Show a message
});