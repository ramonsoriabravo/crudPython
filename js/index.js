const {createApp} = Vue

createApp({
    data(){
        return{
           productos: [],
           //url: 'http://127.0.0.1:5000/productos', 
           url: 'https://ramonsoria.pythonanywhere.com/productos', 
           cargando: true,
           error: false
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        }, //ver si hace falta borrar la coma

    },

    created(){
        this.fetchData(this.url);
    }
}).mount('#app')