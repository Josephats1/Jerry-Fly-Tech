document.addEventListener("DOMContentLoaded", function () {
    const languageIcon = document.getElementById("languageIcon");
    const dropdown = document.getElementById("dropdown");
    const body = document.body;

    // Color options to cycle through
    const colors = [
        "#FF5733", // Color 1
        "#33FF57", // Color 2
        "#3357FF", // Color 3
        "#FF33A8", // Color 4
        "#FFD633", // Color 5
        "#33FFD6", // Color 6
        "#FF33F6", // Color 7
        "#A833FF", // Color 8
        "#33FF9C", // Color 9
        "#FFBD33"  // Color 10
    ];
    let colorIndex = 0;

    // Change background color on document click
    document.addEventListener("click", function (e) {
        body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });

    // Toggle dropdown visibility when the language icon is clicked
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

    // Add click listeners to each language button for demonstration purposes
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

    // Initialize 3D environment (placeholder for future implementation)
    function init3D() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
    }

    init3D();
});
