document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".editor-nav__button");
    const umbrellaImage = document.querySelector(".editor-display__umbrella");
    const logoImage = document.querySelector(".editor-display__logo");
    const logoUploadInput = document.getElementById("logo-upload");
    const logoContainer = document.querySelector(".editor-display__logo-container");

    // Define the image URLs for different colors
    const imageUrls = {
        pink: "https://drive.google.com/uc?export=view&id=1EGZdRH9RffKCorSJjgKEGCHy4YFro2EX",
        blue: "https://drive.google.com/uc?export=view&id=1VsHEklDiL5VbAlW3wJDG1iovKMJOBOrc",
        yellow: "https://drive.google.com/uc?export=view&id=1MUsJ7TOc2dLnrvJ_VFWVApTh1OVfkK3S"
    };

    // Add click event listeners to color buttons
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            // Set the clicked button as active
            button.classList.add("active");

            // Change umbrella image based on selected color
            const color = button.getAttribute("data-color");
            umbrellaImage.src = imageUrls[color];

            // Hide logo container when color changes
            logoContainer.style.display = "none";
            logoImage.src = "";
        });
    });

    // Listen for logo upload changes
    logoUploadInput.addEventListener("change", function() {
        const file = logoUploadInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                logoImage.src = e.target.result;
                logoContainer.style.display = "block";
            };
            reader.readAsDataURL(file);
        } else {
            logoImage.src = "";
            logoContainer.style.display = "none";
        }
    });
});
