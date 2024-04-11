function readMore() {
    let button = document.querySelector("#readMore");
    let paragraph = document.querySelector("#para1");
    let aboutUsText = `Life for Orphans is more than just a charity organization – it's a community of passionate individuals united by a common goal: to make a difference in the lives of orphaned children. Founded on the principles of compassion and solidarity, we work tirelessly to ensure that every child receives the care and support they need to overcome adversity and build a brighter future. From providing essential resources and educational opportunities to offering mentorship and emotional support, we are committed to creating a world where every child has the opportunity to thrive.
    Our journey began with a simple yet powerful belief: that every child deserves to grow up in a loving and nurturing environment, regardless of their circumstances. Over the years, we have witnessed the transformative impact of our work – from seeing children flourish academically to witnessing their resilience in the face of adversity. But our work is far from over. With your support, we can continue to expand our reach and make an even greater impact on the lives of orphaned children around the world.
    Join us in our mission to empower orphaned children, enriching their futures and creating a world where every child has the opportunity to thrive. Together, we can make a lasting difference in the lives of those who need it most. `;
    
    // Apply fade-out animation to the current paragraph
    paragraph.style.opacity = '0';
    
    // Hide the button
    button.style.display = 'none';
    
    // Set a timeout to update the paragraph text and apply fade-in animation
    setTimeout(function() {
      paragraph.innerText = aboutUsText;
      paragraph.style.opacity = '1';
    }, 500); // Adjust the duration of the animation as needed
  }
  