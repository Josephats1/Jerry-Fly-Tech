document.addEventListener("DOMContentLoaded", function () {
    const languageIcon = document.getElementById("languageIcon");
    const dropdown = document.getElementById("dropdown");
    const navbar = document.getElementById("navbar");
    const darkModeToggle = document.getElementById("darkModeToggle");

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

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
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

    // Script for auto-typing effect and color change
    const texts = [
        "Developer", "Designer", "Creator", "Innovator", "Strategist",
        "Thinker", "Collaborator", "Visionary", "Problem Solver", "Tech Enthusiast"
    ];
    const colors = [
        "#ff00ff", "#00ffff", "#ff4500", "#ffff00", "#00ff00",
        "#0000ff", "#ff1493", "#ffd700", "#ff6347", "#8a2be2"
    ];
    let textIndex = 0; // Index for texts
    let colorIndex = 0; // Index for colors
    const typingSpeed = 80; // Speed of typing (in ms)
    const deletingSpeed = 80; // Speed of deleting (in ms)
    const pauseDuration = 80; // Duration to pause after typing
    const autoTypedTextElement = document.createElement('span');
    const cursor = document.createElement('span');
    const nameElement = document.querySelector('#josephats');

    cursor.classList.add('cursor');
    autoTypedTextElement.classList.add('auto-typed-text');
    document.querySelector('section#home p:nth-of-type(2)').appendChild(autoTypedTextElement);
    document.querySelector('section#home p:nth-of-type(2)').appendChild(cursor);

    // Function to change the color of the name
    function changeColor() {
        nameElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    }

    // Function to type text
    function type() {
        const text = texts[textIndex];
        autoTypedTextElement.textContent += text.charAt(autoTypedTextElement.textContent.length);

        if (autoTypedTextElement.textContent.length === text.length) {
            setTimeout(deleteText, pauseDuration);
        } else {
            setTimeout(type, typingSpeed);
        }
    }

    // Function to delete text
    function deleteText() {
        autoTypedTextElement.textContent = autoTypedTextElement.textContent.slice(0, -1);
        
        if (autoTypedTextElement.textContent.length === 0) {
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            setTimeout(type, pauseDuration);
        } else {
            setTimeout(deleteText, deletingSpeed);
        }
    }

    // Start the typing effect and color change
    setInterval(changeColor, 1000); // Change color every second
    type();
});
document.querySelector('.download-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    alert("Starting download..."); // Replace with actual download logic
});
