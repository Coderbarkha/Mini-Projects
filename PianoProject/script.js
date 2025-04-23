// script.js

// Select all keys
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note'); // e.g., C, D#, etc.
    playSound(note); // Play the corresponding sound
  });
});

// Function to play sound
function playSound(note) {
  let audioFormats = ['mp3', 'wav']; // try both formats
  let found = false;
  
  for (let format of audioFormats) {
    let audio = new Audio(`sounds/${note}.${format}`);
    audio.addEventListener('canplaythrough', () => {
      if (!found) {
        found = true;
        audio.play();
      }
    }, { once: true });

    audio.addEventListener('error', () => {
      // File not found or not playable, continue trying next
    });
  }
}
