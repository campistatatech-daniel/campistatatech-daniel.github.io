document.getElementById('citaForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const especialidad = document.getElementById('especialidad').value;
    const fechaHora = document.getElementById('fechaHora').value;
  
    if (!nombre || !cedula || !especialidad || !fechaHora) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    const nuevaCita = { nombre, cedula, especialidad, fechaHora };
  
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    const index = citas.findIndex(c => c.cedula === cedula && c.fechaHora === fechaHora);
  
    if (index >= 0) {
      citas[index] = nuevaCita;
    } else {
      citas.push(nuevaCita);
    }
  
    localStorage.setItem('citas', JSON.stringify(citas));
    this.reset();
    mostrarCitas();
  });
  
  function mostrarCitas() {
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    const tabla = document.getElementById('tablaCitas');
    tabla.innerHTML = '';
  
    citas.forEach((cita) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${cita.nombre}</td>
        <td>${cita.cedula}</td>
        <td>${cita.especialidad}</td>
        <td>${cita.fechaHora}</td>
        <td>
          <button onclick="editarCita('${cita.cedula}', '${cita.fechaHora}')">Editar</button>
          <button onclick="eliminarCita('${cita.cedula}', '${cita.fechaHora}')">Eliminar</button>
        </td>
      `;
      tabla.appendChild(fila);
    });
  }
  
  function editarCita(cedula, fechaHora) {
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    const cita = citas.find(c => c.cedula === cedula && c.fechaHora === fechaHora);
  
    if (cita) {
      document.getElementById('nombre').value = cita.nombre;
      document.getElementById('cedula').value = cita.cedula;
      document.getElementById('especialidad').value = cita.especialidad;
      document.getElementById('fechaHora').value = cita.fechaHora;
    }
  }
  
  function eliminarCita(cedula, fechaHora) {
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas = citas.filter(c => !(c.cedula === cedula && c.fechaHora === fechaHora));
    localStorage.setItem('citas', JSON.stringify(citas));
    mostrarCitas();
  }
  
  document.addEventListener('DOMContentLoaded', mostrarCitas);
  