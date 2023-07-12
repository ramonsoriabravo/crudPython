
let argsUrl = location.search.substring(1).split('&');
console.log(argsUrl)

let data = [];
for(let i = 0; i < argsUrl.length; i++){
    data[i] = argsUrl[i].split('=');
}
console.log(data)

document.getElementById('id').value = decodeURIComponent(data[0][1]);
document.getElementById('nombre').value = decodeURIComponent(data[1][1]);
document.getElementById('precio').value = decodeURIComponent(data[2][1]);
document.getElementById('stock').value = decodeURIComponent(data[3][1]);
document.getElementById('imagen').value = decodeURIComponent(data[4][1]);

function modificar(){
    // Actualizar el producto en la Base de Datos
    let id = document.getElementById('id').value;
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

 //   let url = 'http://127.0.0.1:5000/productos/'+id; // CONEXION LOCAL
 
    let url = 'https://ramonsoria.pythonanywhere.com/productos/'+id;

    let options ={
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
    };

    fetch(url, options)
    .then(function(){
        // Muestra mensaje registro modificado exitosamente
        const mensaje = document.querySelector('.alert-info');
        mensaje.style.display = 'block';

        // Apaga los input y boton del formulario
        apagarControles();
 
        // alert('Registro modificado exitosamente');
        // window.location.href= './productos.html';
    })
    .catch(err => {
        // Muestra mensaje que NO se pudo grabar
        const mensaje = document.querySelector('.alert-danger');
        mensaje.style.display = 'block';
        console.error(err);

        // Apaga los input y boton del formulario
        apagarControles();
    })
}

function apagarControles(){
    document.getElementById('nombre').disabled = true;
    document.getElementById('precio').disabled = true;
    document.getElementById('stock').disabled = true;
    document.getElementById('imagen').disabled = true;
    document.getElementById('btn-modificar').disabled = true;
}