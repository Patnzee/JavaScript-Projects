document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector("img");

    images.forEach(image => {
        image.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImage.src = this.src;
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
