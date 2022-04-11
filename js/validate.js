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

fname.addEventListener("blur", requiredName);
email.addEventListener("blur", requiredEmail);
subject.addEventListener("blur", requiredSubject);


function requiredName() {
    if(fname.value === '' || fname.value == null) {
        fname.classList.add("required");
    } else {
        fname.classList.remove("required");
    }
}

function requiredEmail() {
    if(email.value === '' || email.value == null) {
        email.classList.add("required");
    } else {
        email.classList.remove("required");
    }
}

function requiredSubject() {
    if(subject.value === '' || subject.value == null) {
        subject.classList.add("required");
    } else {
        subject.classList.remove("required");
    }
  }

// ======= RegEx validation ======= //

form.addEventListener('submit', (e) => {
    let messages = [];

    const regEx_Phone = /^(0044|0|\+?44)[12378]\d{8,9}$/;
    const regEx_Email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z{2,5}])/;

    var i = !regEx_Phone.test(phone.value)
    var j = !regEx_Email.test(email.value)
  
    if (i) {
      phone.classList.add("notValid")
    }
    
    if (j) {
      email.classList.add("notValid")
    }

    if (i == true || j == true) {
            messages.push('*Please enter email/phone number in correct format')
          }
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
      errorElement.classList.add("error")
    }
  })