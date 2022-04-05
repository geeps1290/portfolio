var i = 0;
var txt = 'I am a web developer.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

const bannerTagLine = document.getElementById("banner-tagline");

function typewriter() {
  if (i < txt.length) {
    bannerTagLine.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

bannerTagLine.innerText = "";

typewriter();

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



/* =====================
    Form Validation
===================== */

// Get elements from the DOM
const phone = document.getElementById('pnumber');

// Add event listener
phone.addEventListener("blur", validatePhone);

function validatePhone() {
  const regEx_Phone = /^(0044|0|\+?44)[12378]\d{8,9}$/;

  if(!regEx_Phone.test(phone.value)) {
    phone.classList.add("notValid");
    phone.classList.remove("valid");
    // console.log("not valid");
  } else {
    phone.classList.remove("notValid");
    phone.classList.add("valid");
    // console.log("valid");
  }
}

