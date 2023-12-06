function scrollToNext() {
    // Get the next section or element you want to scroll to
    const nextSection = document.getElementById('section2'); // Change the ID to match your target
    
    // Scroll to the next section
    nextSection.scrollIntoView({ behavior: 'smooth' }); // Use smooth scrolling for a better user experience
  }
