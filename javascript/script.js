document.addEventListener("DOMContentLoaded", function () {
    const languageIcon = document.getElementById("languageIcon");
    const dropdown = document.getElementById("dropdown");
    const navbar = document.getElementById("navbar");

    // Color options to cycle through
    const colors = ["#333", "#007bff", "#28a745", "#17a2b8", "#ffc107", "#dc3545", "#6f42c1", "#fd7e14", "#20c997", "#e83e8c"];
    let colorIndex = 0;

    // Toggle dropdown visibility when the icon is clicked
    languageIcon.addEventListener("click", function (e) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        e.stopPropagation(); // Prevent event from bubbling up to the document
    });

    // Hide the dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target) && e.target !== languageIcon) {
            dropdown.style.display = "none";
        }
    });

    // Add click listeners to each language button
    document.querySelectorAll(".dropdown button").forEach(button => {
        button.addEventListener("click", function () {
            const selectedLang = button.getAttribute("data-lang");
            translateText(selectedLang);
            dropdown.style.display = "none"; // Hide the dropdown after selection
        });
    });

    // Translation function
    function translateText(language) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const translations = JSON.parse(element.getAttribute("data-translate"));
            element.textContent = translations[language] || element.textContent;
        });
    }

    // Change background color on click
    document.body.addEventListener("click", function () {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});

