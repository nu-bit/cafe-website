/*! Bootstrap 4.5.0 - Minimal Stub */
(function() {
  'use strict';
  
  // Bootstrap data-toggle functionality
  document.addEventListener('DOMContentLoaded', function() {
    // Handle navbar toggle
    var toggles = document.querySelectorAll('[data-toggle="collapse"]');
    toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        var target = document.querySelector(this.getAttribute('data-target'));
        if (target) {
          target.classList.toggle('show');
        }
      });
    });
    
    // Handle carousel
    var carousels = document.querySelectorAll('[data-ride="carousel"]');
    carousels.forEach(function(carousel) {
      var items = carousel.querySelectorAll('.carousel-item');
      var indicators = carousel.querySelectorAll('[data-slide-to]');
      var currentIndex = 0;
      
      // Set initial active state
      if (items.length > 0) {
        items[0].classList.add('active');
      }
      
      // Handle indicator clicks
      indicators.forEach(function(indicator) {
        indicator.addEventListener('click', function() {
          var slideIndex = parseInt(this.getAttribute('data-slide-to'));
          showSlide(slideIndex);
        });
      });
      
      function showSlide(index) {
        if (index >= items.length) currentIndex = 0;
        if (index < 0) currentIndex = items.length - 1;
        
        items.forEach(function(item) {
          item.classList.remove('active');
        });
        indicators.forEach(function(indicator) {
          indicator.classList.remove('active');
        });
        
        items[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
      }
      
      // Auto-advance carousel
      setInterval(function() {
        currentIndex++;
        if (currentIndex >= items.length) currentIndex = 0;
        showSlide(currentIndex);
      }, 5000);
    });
  });
})();
