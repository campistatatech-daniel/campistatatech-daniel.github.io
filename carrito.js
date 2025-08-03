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
  
      if (!nombre || !ocupacion || !correo || !sexo || !celular) {
        alert("Por favor completa todos los campos.");
        return;
      }
  
      if (!/^\d{10}$/.test(celular)) {
        alert("El número de celular debe tener 10 dígitos.");
        return;
      }
  
      // Obtener contactos anteriores
      const contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];
  
      // Crear nuevo contacto con fecha
      const nuevoContacto = {
        nombre,
        ocupacion,
        correo,
        sexo,
        celular,
        fecha: new Date().toLocaleDateString()
      };
  
      // Guardar en localStorage
      contactosGuardados.push(nuevoContacto);
      localStorage.setItem("contactos", JSON.stringify(contactosGuardados));
      console.log("Contacto guardado:", nuevoContacto);
  
      // Limpiar el formulario
      form.reset();
  
      // Mostrar mensaje de éxito
      mensaje.classList.remove("hidden");
      setTimeout(() => {
        mensaje.classList.add("hidden");
      }, 5000);
    });
  });
  
  