var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").classList.remove("hidden");
  } else {
    document.querySelector("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}

