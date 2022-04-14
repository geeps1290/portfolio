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
  window.setTimeout(closeNav, 200)
})