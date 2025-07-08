document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const animatedTextContainer = document.getElementById('animatedTextContainer');
    const textToAnimate = "Music !"; // The text we want to display

    learnMoreBtn.addEventListener('click', () => {
        // Clear previous content if button is clicked again
        animatedTextContainer.innerHTML = '';
        animatedTextContainer.style.height = 'auto'; // Allow container to expand for text

        // Create individual span elements for each letter
        const letters = textToAnimate.split(''); // Split "Music" into ['M', 'u', 's', 'i', 'c']
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('animated-letter');
            animatedTextContainer.appendChild(span);

            // Trigger animation with a staggered delay for each letter
            setTimeout(() => {
                span.classList.add('show');
            }, index * 100); // 100ms delay between each letter appearing
        });
    });
});
