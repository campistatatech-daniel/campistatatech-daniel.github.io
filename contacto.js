document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contacto-form");
    const mensaje = document.getElementById("mensaje-exito");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const ocupacion = document.getElementById("ocupacion").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const sexo = document.getElementById("sexo").value;
      const celular = document.getElementById("celular").value.trim();
      const fecha = new Date().toLocaleString();
  
      if (!nombre || !ocupacion || !correo || !sexo || !celular) {
        alert("Por favor completa todos los campos.");
        return;
      }
  
      if (!/^\d{10}$/.test(celular)) {
        alert("El número de celular debe tener 10 dígitos.");
        return;
      }
  
      const nuevoContacto = { nombre, ocupacion, correo, sexo, celular, fecha };
      const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
      contactos.push(nuevoContacto);
      localStorage.setItem("contactos", JSON.stringify(contactos));
  
      form.reset();
      mensaje.classList.remove("hidden");
  
      setTimeout(() => {
        mensaje.classList.add("hidden");
      }, 5000);
    });
  });
  