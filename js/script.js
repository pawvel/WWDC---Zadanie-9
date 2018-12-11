var slideIndex = 1;

function currentSlide(n) {
  slideIndex = n;

  var slide = document.getElementsByClassName("slide");
  var dot = document.getElementsByClassName("dot");

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }

  slide[slideIndex - 1].style.display = "flex";
  dot[slideIndex - 1].className += " active";
}

function hideImage() {
  var image = document.getElementById("hide-img");

  image.style.display = "none";
}
