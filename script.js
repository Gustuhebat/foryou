const text = "Hai Manieztt ❤️";
let index = 0;
const speed = 100; // kecepatan mengetik (ms)

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
