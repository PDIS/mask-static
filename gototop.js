goToTop= document.getElementById("goToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    goToTop.style.opacity = "1";
  } else {
    goToTop.style.opacity = "0";
  }
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
goToTop.addEventListener("click",topFunction);