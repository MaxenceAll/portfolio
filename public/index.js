document.addEventListener('mousemove', { passive: true } , function(event) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
  
    let mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    let mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
    let radialGradient = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, var(--secondary-color), var(--background-color))`;
    let elements = document.querySelectorAll('.radial-gradient');
  
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.background = radialGradient;
    }
  });