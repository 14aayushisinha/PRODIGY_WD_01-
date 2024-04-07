window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#333'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Revert to initial color
    }
  });
  
  var navLinks = document.querySelectorAll('#navbar a');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
      this.style.color = '#FF5733'; // Change font color on hover
    });
    
    navLink.addEventListener('mouseout', function() {
      this.style.color = '#333'; // Revert to initial color on hover out
    });
  });
  