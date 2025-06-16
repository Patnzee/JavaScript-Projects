// Countdown function
function countdown() {
    let seconds = document.getElementById("seconds").value;
    let timer = document.getElementById("timer");

    function tick() {
        seconds--;
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);

        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }

    tick();
}

// Slideshow function
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display current slide
    slides[slideIndex - 1].style.display = "block";

    // Repeat every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow on load
showSlides();
