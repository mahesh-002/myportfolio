document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animated-section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.6s ease-in-out";
    });

    function revealSections() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 50) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); 
});
