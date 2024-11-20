// Crear el store de Vuex
const store = new Vuex.Store({
    state: {
        busqueda: '',
        products: [
           { id: 0, texto: 'En esta colección, el champú y el acondicionador trabajan en conjunto para limpiar y desenredar, mientras que la crema para peinar define y controla el frizz, dejando los rizos suaves y manejables.', titulo:"Coconut & Hibiscus" ,imagen: 'img/lineaCoconut.jpg', link: 'CoconutHibiscus.html'},
           { id: 1, texto: 'Esta colección está diseñada para fortalecer y nutrir el cabello, proporcionando hidratación profunda y promoviendo el crecimiento saludable. Ideal para rizos que necesitan un impulso de humedad y suavidad.', titulo:"Jamaican Black Castor Oil" ,imagen: 'img/lineaJamaica.jfif', link: 'lineaJamaica.html' },
           { id: 2, texto: 'El aceite de coco virgen proporciona una hidratación intensa y puede ser utilizado para el cabello, la piel y como aceite de cocina. Su fórmula rica en nutrientes ayuda a mantener la suavidad y el brillo.', titulo:"100% Virgin Coconut Oil" ,imagen: 'img/lineavirgin.jpg', link: 'lineaJamaica.html' },
           { id: 3, texto: 'Esta colección combina la miel de manuka y el yogur para ofrecer una hidratación rica y mejorar la textura del cabello. Perfecta para rizos que necesitan suavidad y definición.', titulo:"Manuka Honey & Yogurt" ,imagen: 'img/lineaManuka.jpg', link: 'lineaJamaica.html' },
           { id: 4, texto: 'Esta colección está formulada con los poderosos extractos de moringa y aguacate, que son conocidos por sus propiedades hidratantes y nutritivas', titulo:"Moringa & Avocado" ,imagen: 'img/linaMoringa.avif', link: 'lineaJamaica.html' },
          { id: 5, texto: 'El extracto de papaya, rico en vitaminas y antioxidantes, ayuda a hidratar y nutrir profundamente el cabello, dejándolo suave y manejable', titulo: "Papaya & Neroli", imagen: 'img/lineaPapaya.jpg', link: 'lineaJamaica.html' },
        ]
    },
    getters: {
        productosFiltrados: (state) => {
            return state.products.filter((producto) =>
                producto.titulo.toLowerCase().includes(state.busqueda.toLowerCase()) ||
                producto.texto.toLowerCase().includes(state.busqueda.toLowerCase())
            );
        }
    },
    mutations: {
        setBusqueda(state, nuevaBusqueda) {
            state.busqueda = nuevaBusqueda;
        }
    }
});

// Declarar componentes globales
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

// Crear la instancia de Vue
new Vue({
    el: '#navegacion',
    store, // Integrar Vuex con la instancia de Vue
    computed: {
        productosFiltrados() {
            return this.$store.getters.productosFiltrados;
        },
        busqueda: {
            get() {
                return this.$store.state.busqueda;
            },
            set(valor) {
                this.$store.commit('setBusqueda', valor);
            }
        }
    }
});
