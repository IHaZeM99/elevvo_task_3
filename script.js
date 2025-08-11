document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  // Toggle mobile menu with slide animation
  let menuOpen = false;
  navToggle.addEventListener('click', function() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      navMenu.classList.remove( 'opacity-0', 'pointer-events-none');
      navMenu.classList.add( 'opacity-100', 'pointer-events-auto');
    } else {
      navMenu.classList.add( 'opacity-0', 'pointer-events-none');
      navMenu.classList.remove( 'opacity-100', 'pointer-events-auto');
    }
  });
  
  // Close menu when clicking links (mobile)
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) { // Only on mobile
        navMenu.classList.add( 'opacity-0', 'pointer-events-none');
        navMenu.classList.remove( 'opacity-100', 'pointer-events-auto');
        menuOpen = false;
      }
    });
  });
  
  // Handle resize events
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      navMenu.classList.remove( 'opacity-0', 'pointer-events-none',  'opacity-100', 'pointer-events-auto');
      menuOpen = false;
    } else {
      navMenu.classList.add( 'opacity-0', 'pointer-events-none');
      navMenu.classList.remove( 'opacity-100', 'pointer-events-auto');
      menuOpen = false;
    }
  });
});