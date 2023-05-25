let images = ["assets/phone2.png",  "assets/phone3.png", "assets/phone4.png", "assets/phone5.png", "assets/phone1.png",]; // Add your images paths here
let texts = ["Interactive User Interface", "Pronounciation Correction","Improve Vocabulary","Explorative Learning","Child Friendly Games"]; // Add your texts here

let currentImageIndex = 0;
let currentTextIndex = 0;

// Change the image inside the phone frame every 3 seconds
setInterval(function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slideshow-image').src = images[currentImageIndex];
}, 3000);

// Change the text on the right side of the screen every 5 seconds
setInterval(function() {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    document.getElementById('slideshow-text').textContent = texts[currentTextIndex];
}, 3000);
