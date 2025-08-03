// Animación al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const reveal = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.9;
  
        if (sectionTop < triggerBottom) {
          section.classList.add("fade-in", "visible");
        }
      });
    };
  
    window.addEventListener("scroll", reveal);
    reveal(); // Ejecutar al cargar la página también
  });
  