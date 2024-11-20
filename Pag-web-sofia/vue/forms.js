Vue.component('menu-lateral', {
    template: `
        <nav class="navbar navbar-expand-sm navbar-light" style="background-color: rgb(228, 209, 211);">
    <a class="navbar-brand" href="#">
        <img src="img/sofiaicono.png" alt="logo" style="width:40px;">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="shop.html">Shop</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="formLogin.html">Ingresar</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="formRegistro.html">Registrarse</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="formComentarios.html">Comentarios</a>
            </li>
        </ul>
    </div>
</nav>

    `
});

Vue.component('footer-bar', {
    template: `
        <footer class="footer bg-body-tertiary text-center text-lg-start fixed-bottom">
            <div class="text-center" style="background-color: rgb(228, 209, 211);">
                <p class="text-center mb-0">&copy; 2024 Curly Products. Todos los derechos reservados.</p>
            </div>
        </footer>
    `
});

new Vue({
    el: '#app',  // Asegúrate de que este sea el ID que contiene todo el Vue
    data: {
        successMessage: '', // Mensaje de éxito,
        showMessage: false, // Para controlar la visibilidad del mensaje,
        loginForm: {
            email: '',
            password: ''
        },
        registerForm: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        commentForm: {
            name: '',
            email: '',
            comment: ''
        }
    },
    methods: {
        login() {
            console.log('Intento de login', this.loginForm);
            if (this.loginForm.email && this.loginForm.password) {
                this.successMessage = 'Has iniciado sesión correctamente';
                this.showMessage = true;

                // Mostrar el mensaje y después de 3 segundos redirigir
                setTimeout(() => {
                    this.showMessage = false;
                    // Redirigir a la página principal
                    window.location.href = 'presentacion.html';
                }, 3000);
            } else {
                console.log('Faltan credenciales');
            }
        },
        register() {
            console.log('Intento de registro', this.registerForm);
            if (this.registerForm.name && this.registerForm.email && this.registerForm.password) {
                this.successMessage = 'Te has registrado correctamente';
                this.showMessage = true;
                setTimeout(() => {
                    this.showMessage = false;
                    // Redirigir a la página principal
                    window.location.href = 'presentacion.html';
                }, 3000);
            } else {
                console.log('Faltan credenciales');
            }
        },
        submitComment() {
            console.log('Comentario enviado', this.commentForm);
            alert('Comentario enviado: ' + JSON.stringify(this.commentForm));
        },
    },
});
