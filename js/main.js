/* =======================
    Banner Text Effect
======================= */

const textDisplay = document.getElementById("banner-tagline");
const phrases = [' I am a trainee web developer. ', ' I live in Bristol, UK. ', ' I am open to work. '];
let k = 0;
let l = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (k < phrases.length){

    if (!isDeleting && l <= phrases[k].length) {
      currentPhrase.push(phrases[k][l]);
      l++;
    }

    if (isDeleting && l <= phrases[k].length) {
      currentPhrase.pop(phrases[k][l]);
      l--;
    }

    if (l == phrases[k].length){
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && l === 0) {
      currentPhrase = [];
      isDeleting = false;
      k++;
      if (k == phrases.length) {
        k = 0;
      }
    }

  }
  const spedUp = Math.random() * (50 -30) + 30;
  const normalSpeed = Math.random() * (100 -80) + 80;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed; 
  setTimeout(loop, time);
}

loop();

/* =======================
      Slide out menu
======================= */

/* Open the sidenav */
function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mobile-menu").style.width = "0";
}

/* ==== Have side nav already open then close ==== */

var i = document.location.href.indexOf('#navopen')

if (i != -1) {
  // openNav();
  document.querySelector(".overlay").style.transition = "";
  document.getElementById("mobile-menu").style.width = "100%";
  document.querySelector(".overlay").style.transition = "all 0.5s ease 0s";
  let newUrl = window.location.href.substring(0, i);
  window.history.replaceState(undefined, "", newUrl);
}

window.addEventListener('load', function() {
  window.setTimeout(closeNav, 600)
})