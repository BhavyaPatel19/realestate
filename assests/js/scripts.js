document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon.");
            form.reset();
        });
    }
});

// Add hover effect to steps
document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mouseover', () => {
        step.style.transform = 'scale(1.05)';
        step.style.transition = 'transform 0.3s ease';
    });

    step.addEventListener('mouseout', () => {
        step.style.transform = 'scale(1)';
    });
});
