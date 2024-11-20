Vue.component('menu-lateral', {
    template: `
        <nav class="navbar navbar-expand-sm navbar-light" style="background-color: rgb(228, 209, 211);">
            <a class="navbar-brand" href="#">
                <img src="img/sofiaicono.png" alt="logo" style="width:40px;">
            </a>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="shop.html">Shop</a></li>
                <li class="nav-item"><a class="nav-link" href="formLogin.html">Ingresar</a></li>
                <li class="nav-item"><a class="nav-link" href="formRegistro.html">Registrarse</a></li>
                <li class="nav-item"><a class="nav-link" href="formComentarios.html">Comentarios</a></li>
            </ul>
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

const store = new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || [] // Cargar desde localStorage
    },
    mutations: {
        ADD_TO_CART(state, product) {
            const cartItem = state.cart.find(item => item.id === product.id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        REMOVE_FROM_CART(state, product) {
            const cartItem = state.cart.find(item => item.id === product.id);
            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            } else {
                state.cart = state.cart.filter(item => item.id !== product.id);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        SET_CART_FROM_STORAGE(state, cart) {
            state.cart = cart;
        }
    },
    getters: {
        cart: state => state.cart,
        cartTotal: state => state.cart.reduce((total, product) => total + product.precio * product.quantity, 0),
        totalItems: state => state.cart.reduce((total, product) => total + product.quantity, 0)
    }
});

new Vue({
    el: '#app',
    store,
    data() {

        return {
            busqueda: '',
            mensajeVisible: false, 
            productos: [
                {
                    id: 1,
                    nombre: 'Champú Hidratante para Rizos y Brillo',
                    descripcion: 'Champú que brinda brillo y control a tus rizos, haciéndolos manejables y con vida',
                    imagen: 'img/coco1.jpg',
                    precio: 12.99
                },
                {
                    id: 2,
                    nombre: 'Mousse Antifrizz para Rizos',
                    descripcion: 'Mousse ligero que combate el frizz y define tus rizos, proporcionando una fijación duradera',
                    imagen: 'img/coco2.jpg',
                    precio: 10.49
                },
                {
                    id: 3,
                    nombre: 'Gel de Ducha Iluminador',
                    descripcion: 'Gel de baño nutritivo, enriquecido con aceite de coco, que deja la piel suave y radiante',
                    imagen: 'img/coco3.jpg',
                    precio: 15.99
                },
                {
                    id: 4,
                    nombre: 'Leche para Estilo y Rizos',
                    descripcion: 'Leche para peinar que nutre y define los rizos, realzando su forma natural con ingredientes naturales',
                    imagen: 'img/coco4.jpg',
                    precio: 11.99
                },
                {
                    id: 5,
                    nombre: 'Bruma Hidratante de Sostenimiento y Brillo con Coco e Hibisco',
                    descripcion: 'Una bruma ligera que hidrata y define los rizos, ofreciendo un brillo saludable y una fijación duradera',
                    imagen: 'img/coco5.webp',
                    precio: 13.49
                },
                {
                    id: 6,
                    nombre: 'Gel Definidor de Rizos de Coco y Hibisco',
                    descripcion: 'Este gel definidor está formulado con ingredientes naturales como el coco y el hibisco, que ayudan a definir y controlar los rizos mientras proporcionan hidratación y brillo',
                    imagen: 'img/coco6.png',
                    precio: 14.99
                },
                { 
                    id: 7, 
                    nombre: 'Jamaican Black Castor Oil + Flaxseed Edge Gel', 
                    descripcion: 'Gel para controlar los bordes y definir el estilo, enriquecido con aceite de ricino negro jamaicano y aceite de linaza para una fijación duradera.', 
                    imagen: 'img/jamaica1.webp', 
                    precio: 12.99 
                },
                { 
                    id: 8, 
                    nombre: 'Jamaican Black Castor Oil Strengthen & Restore Conditioner', 
                    descripcion: 'Acondicionador que nutre y fortalece el cabello, ayudando a restaurar la humedad y la vitalidad.', 
                    imagen: 'img/jamaica2.webp', 
                    precio: 11.49 
                },
                { 
                    id: 9, 
                    nombre: 'Jamaican Black Castor Oil Strengthen & Restore Leave-In Conditioner', 
                    descripcion: 'Acondicionador sin enjuague que proporciona hidratación continua y protección para el cabello, ideal para rizos secos y dañados.', 
                    imagen: 'img/jjamaica3.webp', 
                    precio: 13.49 
                },
                { 
                    id: 10, 
                    nombre: 'Jamaican Black Castor Oil Strengthen & Restore Shampoo', 
                    descripcion: 'Champú nutritivo que limpia suavemente mientras fortalece el cabello, ayudando a prevenir la rotura y la caída.', 
                    imagen: 'img/jamaica4.webp', 
                    precio: 10.99 
                },
                { 
                    id: 11, 
                    nombre: 'Jamaican Black Castor Oil Strengthen & Restore Treatment Masque', 
                    descripcion: 'Mascarilla intensiva que proporciona una hidratación profunda y ayuda a restaurar la salud del cabello.', 
                    imagen: 'img/jamaica5.webp', 
                    precio: 14.99 
                }
            ]
        };
    },
    computed: {
        cart() {
            return this.$store.getters.cart;
        },
        cartTotal() {
            return this.$store.getters.cartTotal;
        },
        totalItems() {
            return this.$store.getters.totalItems;
        },
        filteredProducts() {

            return this.productos.filter(product =>
                product.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
            );
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit('ADD_TO_CART', product);
            this.mensajeVisible = true; // Mostrar el mensaje
            setTimeout(() => {
                this.mensajeVisible = false; // Ocultar el mensaje después de 3 segundos
            }, 2000);
        },
        removeFromCart(product) {
            this.$store.commit('REMOVE_FROM_CART', product);
        },
        async login() {
        try {
            const response = await axios.post('http://localhost/Pag-web-sofia/vue/index.php', {
                login: true,
                email: this.email,
                contraseña: this.password
            });
            console.log(response.data);  // Maneja la respuesta
        } catch (error) {
            console.error('Error al hacer login:', error);
        }
    }
        
    },
    created() {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            this.$store.commit('SET_CART_FROM_STORAGE', storedCart);
        }
    }
});

function openCarrito() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closeCarrito() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

function mostrarMensaje() {
    document.getElementById('mensaje').style.display = 'block';
}
