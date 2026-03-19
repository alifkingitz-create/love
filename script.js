let music = document.getElementById("bgMusic");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function goNext() {
  window.location.href = "book.html";
}

let current = 0;
let pages = document.querySelectorAll(".page");

function nextPage() {
  if (current < pages.length) {
    pages[current].classList.add("turn");
    current++;
  } else {
    showFinal();
  }
}

function showFinal() {
  document.getElementById("finalMessage").classList.remove("hidden");

  // Flower rain
  setInterval(() => {
    let flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 5000);
  }, 200);

  // Curtain animation
  let left = document.createElement("div");
  let right = document.createElement("div");

  left.className = "curtain left";
  right.className = "curtain right";

  document.body.appendChild(left);
  document.body.appendChild(right);
}
