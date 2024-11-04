document.addEventListener('DOMContentLoaded', (event) => {
    const numeroTelefono = "tel:3123456789"; // Número de teléfono celular predefinido

    const callBtn = document.getElementById('call-btn');
    callBtn.addEventListener('click', function() {
        window.location.href = numeroTelefono;
    });
});
