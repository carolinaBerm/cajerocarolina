import { usuarios } from "../model/ModelLogin.js";
// console.log(usuarios);

let inputs = document.querySelectorAll('.controls')
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario)
})

// Validaciones de Expresiciones Regulares
let username = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
let password = /.*?.(?=[1-9])/

function validarFormulario(e) {
    console.log(e)
    switch (e.target.name) {
        case 'username':
            if (username.test(e.target.value)) {
                document.getElementById('username').style.backgroundColor = 'rgb(176, 204, 176)'
            }
            break;

        case 'password':
            if (password.test(e.target.value)) {
                document.getElementById('password').style.backgroundColor = 'rgb(176, 204, 176)'
            } else {
                document.getElementById('password').style.backgroundColor = 'rgb(204, 176, 176)'
            }
            break;

        default:
            break;
    }
}

// Control del Inicio de Sesión
let loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click', function () {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let userAttempt = 0

    // while (userAttempt > 0) {
    //Validación del Usuario 1
    /* find o filter */
    usuarios.some(function (user) {

        if (user.usuario === username && user.contrasena === password) {
            console.table(user);
            console.log('Inicio de sesión exitoso. ' + username)

            //Configuración de alerta
            const AlertConfig = document.getElementById('liveToastCorrecto')
            const toastCorrecto = bootstrap.Toast.getOrCreateInstance(AlertConfig)
            toastCorrecto.show()

            //Control de ventanas
            document.getElementById('sound-wave').style.display = 'flex'
            setTimeout(() => {
                document.getElementById('sound-wave').style.display = 'none'
                document.getElementById('login').style.display = 'none'
                document.getElementById('panel').style.display = 'block'
            }, 1000);
            
            return true;
        } else {
            userAttempt++
            // console.log('Prueba ' + userAttempt);
            if (userAttempt >= 0) {
                //Impresiones en consola
                console.log('Datos incorrectos. Te quedan ' + userAttempt)
                console.log('Acceso denegado')

                //Configuración de alerta
                const AlertConfig = document.getElementById('liveToastIncorrecto')
                const toastIncorrecto = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                toastIncorrecto.show()
            } else {
                //Impresiones en consola
                console.log('Has excedido el número máximo de intentos. Cuenta bloqueda.❌')

                //Configuración de alerta
                const AlertConfig = document.getElementById('liveToastBloqueda')
                const toastBloqueda = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                toastBloqueda.show()
            }
        }
    })
})

//Control del profile
const profile = document.querySelector('.profile')
const dropdown = document.querySelector('.dropdown__wrapper')
profile.addEventListener('click', () => {
    dropdown.classList.remove('none')
    dropdown.classList.toggle('hide')
})

document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target)
    const isProfileClicked = profile.contains(event.target)

    if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.add('hide')
        dropdown.classList.add('dropdown__wrapper--fade-in')
    }
})

//Control de cerrar sesión
const cerrarSesion = document.getElementById('cerrarSesion')
cerrarSesion.addEventListener('click', function () {
    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'block'
        document.getElementById('panel').style.display = 'none'
    }, 1000);
})

// Control de registerGoogle
const registerGoogle = document.getElementById('registerGoogle')
registerGoogle.addEventListener('click', function () {
    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionRegisterGoogle').style.display = 'block'
    }, 1000);
})

// Control de registerApple
const registerApple = document.getElementById('registerApple')
registerApple.addEventListener('click', function () {
    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionRegisterApple').style.display = 'block'
    }, 1000);
})