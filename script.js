document.addEventListener("DOMContentLoaded", function() {
    const aboutMeLink = document.getElementById("about-me-link");
    const aboutMeSection = document.getElementById("about-me");

    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        // Toggle the 'visible' class
        aboutMeSection.classList.toggle("visible");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const showLinks = document.getElementById("show-links");
    const linksContainer = document.getElementById("assignment-links");

    showLinks.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        // Toggle visibility
        if (linksContainer.style.display === "none" || linksContainer.style.display === "") {
            linksContainer.style.display = "block";
        } else {
            linksContainer.style.display = "none";
        }
    });
});