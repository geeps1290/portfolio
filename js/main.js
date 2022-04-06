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
const email = document.getElementById('eMail');
const fname = document.getElementById('fname');
const subject = document.getElementById('subject');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// ======= Required Fields ======= //

let emptyFname = fname.value === '' || fname.value == null
let emptyEmail = email.value === '' || email.value == null
let emptySubject = subject.value === '' || subject.value == null

form.addEventListener('submit', (e) => {
  let messages = []
  if (emptyFname == true) {
    fname.classList.add("required")
  }

  if (emptyEmail == true) {
    email.classList.add("required")
  }

  if (emptySubject == true) {
    subject.classList.add("required")
  }

  if (emptyFname == true || emptyEmail == true || emptySubject == true) {
    messages.push('*Please complete required fields')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    errorElement.classList.add("error")
  }
})

// ======= RegEx validation ======= //

// Add event listener
phone.addEventListener("blur", validatePhone);
email.addEventListener("blur", validateEmail);

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

function validateEmail() {
  const regEx_Email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z{2,5}])/;

  if(!regEx_Email.test(email.value)) {
    email.classList.add("notValid");
    email.classList.remove("valid");
    // console.log("not valid");
  } else {
    email.classList.remove("notValid");
    email.classList.add("valid");
    // console.log("valid");
  }
}

