document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const hiddenTextContainer = document.getElementById('hiddenTextContainer');
    const animatedTexts = document.querySelectorAll('.animated-text');

    // Store the original text of the animated spans
    animatedTexts.forEach(span => {
        span.setAttribute('data-text', span.textContent);
    });

    learnMoreBtn.addEventListener('click', () => {
        // Toggle the visibility of the container
        hiddenTextContainer.classList.toggle('show');

        // Only animate if showing
        if (hiddenTextContainer.classList.contains('show')) {
            animatedTexts.forEach((span, index) => {
                // Remove existing 'reveal' class to reset animation if clicked multiple times
                span.classList.remove('reveal');
                // Re-add 'reveal' class after a slight delay to re-trigger animation
                setTimeout(() => {
                    span.classList.add('reveal');
                }, index * 400); // Stagger the animation start for each word
            });
        }
    });
});