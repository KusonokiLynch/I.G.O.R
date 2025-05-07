function toggleTexto(header) {
    const body = header.nextElementSibling;
    const flecha = header.querySelector('.flecha');

    if (body.style.display === 'block') {
        body.style.display = 'none';
        flecha.textContent = '▼';
    } else {
        body.style.display = 'block';
        flecha.textContent = '▲';
    }
}



// Código extra por si luego quieres mostrar info basada en el proyecto seleccionado o fecha
document.addEventListener("DOMContentLoaded", function () {
    const selectProyecto = document.getElementById("serial");
    const fechaInicio = document.getElementById("fecha");

    // Opcional: puedes usar esto para mostrar cosas dinámicas
    selectProyecto.addEventListener("change", function () {
        console.log("Proyecto seleccionado:", selectProyecto.value);
        // Aquí podrías cambiar datos como "Nombre del cliente", etc.
    });

    fechaInicio.addEventListener("change", function () {
        console.log("Fecha seleccionada:", fechaInicio.value);
        // Aquí podrías actualizar el texto de "Fecha de inicio" si lo deseas
    });
});
