// JavaScript for smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

            

    
        // Get the current year using JavaScript's Date object
        const currentYear = new Date().getFullYear();
        document.getElementById("currentYear").textContent = currentYear;
