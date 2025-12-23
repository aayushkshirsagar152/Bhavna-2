let pages = document.querySelectorAll(".page");
let current = 0;

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  pages[current].classList.add("active");

  if (current === 1) startShayari();
}

let shayariText =
"❤️ Gulab lagti ho\n\n" +
"aaye haye\n\n" +
"halka sa muskra do to 🤌🏻\n\n" +
"maa ki kasam\n\n" +
"la-jawab lagti ho 🤍";

function startShayari() {
  let el = document.getElementById("shayari");
  el.innerHTML = "";
  let i = 0;

  let typing = setInterval(() => {
    el.innerHTML += shayariText.charAt(i);
    i++;
    if (i >= shayariText.length) clearInterval(typing);
  }, 90);
}

// 🎵 SONG CONTROLS (MOBILE FRIENDLY)
let song = document.getElementById("song");

function playSong() {
  song.volume = 0.8;
  song.play();
}

function pauseSong() {
  song.pause();
}