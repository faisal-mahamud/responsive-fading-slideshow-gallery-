var touchInitialX = 0;
var touchFinalX = 0;
var slideIndex = 1;
showSlides(slideIndex);

document.querySelector('body').addEventListener('keydown', function(event) {
	var key = event.keyCode;
	
	if (key == 27) {
    closeGallery();
	} else if(key == 37) {
    updateSlide(-1);
	} else if (key == 39) {
    updateSlide(1);
	}
});


document.querySelector('body').addEventListener('touchstart', function(event) {
  touchInitialX = event.changedTouches[0].pageX;
});


document.querySelector('body').addEventListener('touchend', function(event) {
  touchFinalX = event.changedTouches[0].pageX;
  verifyTouch();
});


function verifyTouch() {
  if ((touchInitialX > touchFinalX) && (touchInitialX - touchFinalX >= 150)) {
    updateSlide(-1);
  } else if ((touchFinalX > touchInitialX) && (touchFinalX - touchInitialX >= 150)) {
    updateSlide(1);
  }
}


// Next/previous controls
function updateSlide(n) {
  showSlides(slideIndex += n);
}


// Thumbnail image controls
function goToSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var slides = document.getElementsByClassName("slide-component");
  var thumbs = document.getElementsByClassName("thumbnail");
  var captionText = document.querySelector("p#caption");

  var i;

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "table-cell";

  thumbs[slideIndex-1].className += " active";
  
  captionText.innerHTML = thumbs[slideIndex-1].alt;
}


function closeGallery() {
  alert("Gallery closed!");
}