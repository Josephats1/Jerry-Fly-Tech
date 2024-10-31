
    // Script for auto-typing effect and color change
    
    cursor.classList.add('cursor');
    autoTypedTextElement.classList.add('auto-typed-text');
    document.querySelector('section#home p:nth-of-type(2)').appendChild(autoTypedTextElement);
    document.querySelector('section#home p:nth-of-type(2)').appendChild(cursor);

    // Function to change the color of the name
    
// Change color every second (1000 milliseconds)
setInterval(changeColor, 1000);

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
