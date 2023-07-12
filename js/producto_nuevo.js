function guardar() {
    let n = document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let i = document.getElementById('imagen').value;

    let producto = {
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    }

    //  let url = 'http://127.0.0.1:5000/productos'; // CONEXION LOCAL
    let url = 'https://ramonsoria.pythonanywhere.com/productos';

    let options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    fetch(url, options)
        .then(function () {
            // Muestra mensaje de grabacion exitosa
            const mensaje = document.querySelector('.alert-info');
            mensaje.style.display = 'block';

        // Apaga los input y boton del formulario
        apagarControles();

            // alert('Producto guardado exitosamente');
            // window.location.href = './productos.html';
        })
        .catch((error) => {
            // Muestra mensaje que No se puedo guardar el registro
            const mensaje = document.querySelector('.alert-danger');
            mensaje.style.display = 'block';
            console.error(error);

         // Apaga los input y boton del formulario
         apagarControles();           
        })
}

function apagarControles(){
    document.getElementById('nombre').disabled = true;
    document.getElementById('precio').disabled = true;
    document.getElementById('stock').disabled = true;
    document.getElementById('imagen').disabled = true;
    document.getElementById('btn-grabar').disabled = true;
}