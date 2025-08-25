function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    alert("Iniciando sesión...");
    return false; // Para prevenir el envío real del formulario en este ejemplo
}

function validateSignup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newUsername === "" || newPassword === "" || confirmPassword === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    alert("Cuenta creada con éxito.");
    return false; // Para prevenir el envío real del formulario en este ejemplo
}

function initPrototype() {
    const prototypeArea = document.getElementById('prototypeArea');
    prototypeArea.innerHTML = "<p>Prototipo de creación de objetos 3D en desarrollo...</p>";
    // Aquí puedes agregar más lógica para el prototipo 3D
}

function sendMessage() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    alert("Mensaje enviado con éxito.");
    return false; // Para prevenir el envío real del formulario en este ejemplo
}


function validarFormulario() {
            // Obtener los valores de los campos
            const correo = document.getElementById('correo').value;
            const contraseña = document.getElementById('nombres').value;

            // Expresión regular para validar el correo
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validar el correo
            if (!regexCorreo.test(correo)) {
                alert("Por favor, ingrese un correo electrónico válido.");
                return false; // Evita que se envíe el formulario
            }

            // Validar la contraseña
            if (contraseña.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres.");
                return false; // Evita que se envíe el formulario
            }

            // Si todo es correcto, redirigir a la página principal
            alert("Formulario enviado con éxito!");
            location.href = 'index.html'; // Redirige al usuario
            return true; // Permite que se envíe el formulario
        }

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar validación si lo deseas
    window.location.href = "index.html";
});

