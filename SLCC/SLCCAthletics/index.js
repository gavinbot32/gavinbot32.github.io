let currentSlide = 0;
const slideTimer = 10
const progressBar = document.querySelector('.progress-bar');
const slides = document.querySelectorAll('.slide');
let slideInterval;

// Auto slide change every 7.5 seconds
// Function to change slides
function changeSlide(direction =1 ) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    resetProgressBar();
}

// Function to reset and animate the progress bar
function resetProgressBar() {
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, slideTimer*1000);
    // Reset width to 0, then trigger the transition
    progressBar.style.transition = 'none'; // Disable transition for reset
    progressBar.style.width = '0'; // Set width to 0 instantly
    setTimeout(() => {
      progressBar.style.transition = `width ${slideTimer}s linear`; // Enable smooth transition
      progressBar.style.width = '106%'; // Animate to full width
    }, 500); // Small delay to allow for the reset
  }
  
  changeSlide(0);
  resetProgressBar();