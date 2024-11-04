document.addEventListener('DOMContentLoaded', (event) => {
    const numeroTelefono = "tel:3156532881"; // Número de teléfono celular predefinido

    const callBtn = document.getElementById('call-btn');
    callBtn.addEventListener('click', function() {
        window.location.href = numeroTelefono;
    });
});
