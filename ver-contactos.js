document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.querySelector("#tabla-contactos tbody");
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  
    if (contactos.length === 0) {
      tabla.innerHTML = "<tr><td colspan='6'>No hay contactos guardados.</td></tr>";
      return;
    }
  
    contactos.forEach(contacto => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${contacto.nombre}</td>
        <td>${contacto.ocupacion}</td>
        <td>${contacto.correo}</td>
        <td>${contacto.sexo}</td>
        <td>${contacto.celular}</td>
        <td>${contacto.fecha}</td>
      `;
      tabla.appendChild(fila);
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contacto-usuario");
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  
    if (contactos.length === 0) {
      contenedor.innerHTML = "<p>No hay contactos registrados aún.</p>";
      return;
    }
  
    const ultimo = contactos[contactos.length - 1]; // el último guardado
  
    contenedor.innerHTML = `
      <ul>
        <li><strong>Nombre:</strong> ${ultimo.nombre}</li>
        <li><strong>Ocupación:</strong> ${ultimo.ocupacion}</li>
        <li><strong>Correo:</strong> ${ultimo.correo}</li>
        <li><strong>Sexo:</strong> ${ultimo.sexo}</li>
        <li><strong>Celular:</strong> ${ultimo.celular}</li>
        <li><strong>Fecha:</strong> ${ultimo.fecha}</li>
      </ul>
    `;
  });
  