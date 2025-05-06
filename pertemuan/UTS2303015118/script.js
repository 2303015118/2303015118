function showPage(pageId) {
    const sections = ['home', 'about', 'portfolio', 'contact'];
    sections.forEach(id => {
      document.getElementById(id).style.display = id === pageId ? 'block' : 'none';
    });
  
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`nav button[onclick="showPage('${pageId}')"]`).classList.add('active');
  }
  
  // Slideshow untuk Portfolio
  let currentSlide = 0;
  
  function changeSlide(direction) {
    const slides = document.querySelectorAll('#portfolio .slide');
    slides[currentSlide].style.display = 'none';
  
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
  
    slides[currentSlide].style.display = 'block';
  }
  