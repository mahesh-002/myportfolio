document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    // Load More Certificates
    const loadMoreBtn = document.getElementById("loadMoreCertificates");
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function () {
            let newCertificate = document.createElement("div");
            newCertificate.classList.add("certificate-box");
            newCertificate.innerHTML = `
                <h3>Advanced Web Development</h3>
                <p>Issued by: Example Institute</p>
                <p>Year: 2025</p>
                <a href="#" target="_blank">View Certificate</a>
            `;
            document.querySelector(".certificate-container").appendChild(newCertificate);
        });
    }

    // Smooth Scrolling for Internal Links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});
