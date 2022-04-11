/* =======================
    Banner Text Effect
======================= */

// var i = 0;
// var txt = 'I am a web developer.'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// const bannerTagLine = document.getElementById("banner-tagline");

// function typewriter() {
//   if (i < txt.length) {
//     bannerTagLine.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typewriter, speed);
//   }
// }

// bannerTagLine.innerText = "";

// typewriter();






// const text = document.querySelector('#banner-tagline');
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";

// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML = "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick () {
//   const span = text.querySelectorAll('span')[char];
//   span.classList.add('fade');
//   char++;
//   if (char === splitText.length){
//     complete();
//     return;
//   }
// }

// function complete() {
//   clearInterval(timer);
//   timer = null;
// }



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