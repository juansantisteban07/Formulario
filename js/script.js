function crearUsuario(nombre, apellido, tipo_identificacion, numero_identificacion, nacimiento, celular, correo, pais, ciudad, tratamiento_datos) {
    const usuarioCreado = {
        id: Date.now(),
        nombreCompleto: `${nombre}, ${apellido}`, 
        documento: {
            tipo: tipo_identificacion,
            num: numero_identificacion
        },
        celu: celular,
        correo: correo,
        fecha_nac: nacimiento,
        ubicacion: { 
            pais: pais,     
            ciudad: ciudad,
        },
        tratamientos: tratamiento_datos 
    };
    
    return usuarioCreado;
}

const formulario = document.getElementById('FormularioRegistro');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();
    
    const nombre = document.getElementById('nombres').value;
    const apellido = document.getElementById('apellidos').value;
    const identificacion = document.getElementById('tipo-id').value;
    const num = document.getElementById('numero-doc').value;
    const nac = new Date().toLocaleDateString();
    const calu = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const datos = document.getElementById('terminos').checked ? "on" : "off";

    // Lograr historial acumulativo y no se sobreponga:
    // Creación del objeto de usuario
    const usuarioNuevo = crearUsuario(nombre, apellido, identificacion, num, nac, calu, correo, pais, ciudad, datos);

    // Muestra el registro en la consola
    console.log(usuarioNuevo);

    // Recupera la lista actual bajo la clave 'usuarioCreado1' o inicia un arreglo nuevo
    let historialUsuarios = JSON.parse(localStorage.getItem('usuarioCreado1')) || [];

    // Agrega el nuevo usuario a la lista
    historialUsuarios.push(usuarioNuevo);

    // Guarda el historial completo bajo la clave 'usuarioCreado1'
    localStorage.setItem('usuarioCreado1', JSON.stringify(historialUsuarios));

    // Limpia las cajas del formulario para el siguiente ingreso
    formulario.reset();
});