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

const formulario = document.querySelector('form');

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

    const crearUduario = crearUsuario(nombre, apellido, identificacion, num, nac, calu, correo, pais, ciudad, datos);
    console.log('Registro Creado')

    const usuarioJSON = JSON.stringify(crearUduario)


    localStorage.setItem('usuarioCreado1' + crearUduario.id, usuarioJSON)


//Reto 1: Identificar tipos primitivos
function identificarPrimitivos() {
  const texto = "hola";
  const numero = 42;
  const booleano = true;
  const nulo = null;    
  const indefinido = undefined;
  const simbolo = Symbol("id");
  const grande = 123n;
 
  return {
    texto: typeof texto,
    numero: typeof numero,
    booleano: typeof booleano,
    nulo: typeof nulo,
    indefinido: typeof indefinido,
    simbolo: typeof simbolo,
    grande: typeof grande
  };
}
 
//Reto 2: Diferenciar string y number 
function diferenciarStringNumber(valor) {
  return {
    tipo: typeof valor,
    esString: typeof valor === "string",
    esNumber: typeof valor === "number"
  };
}
 
//Reto 3: El caso especial de null 
function explorarNull() {
  const nulo = null;
  return {
    valor: nulo,
    tipo: typeof nulo,
    esNull: nulo === null
  };
}
 
//Reto 4: Undefined vs Null 
function compararNullUndefined() {
  let sinAsignar;
  const vacio = null;
  return {
    sinAsignar,
    vacio,
    tipoSinAsignar: typeof sinAsignar,
    tipoVacio: typeof vacio,
    sonIguales: sinAsignar == vacio,
    sonEstrictamenteIguales: sinAsignar === vacio
  };
}
 
//Reto 5: Symbol y BigInt 
function crearSymbolYBigInt() {
  const simbolo = Symbol("miID");
  const numeroGrande = 9007199254740991n;
  return {
    tipoSymbol: typeof simbolo,
    tipoBigInt: typeof numeroGrande,
    descripcionSymbol: simbolo.description,
    valorBigInt: numeroGrande
  };
}
 
//Reto 6: Crear un objeto 
function crearObjeto() {
  const persona = {
    nombre: "Juan",
    edad: 42,
    activo: true
  };
  return {
    persona,
    tipoPersona: typeof persona,
    propiedades: Object.keys(persona)
  };
}
 
//Reto 7: Trabajar con arrays 
function trabajarConArreglos() {
  const mezcla = [1, "dos", true, null];
  return {
    arreglo: mezcla,
    esArreglo: Array.isArray(mezcla),
    largo: mezcla.length,
    tipos: mezcla.map(elemento => typeof elemento)
  };
}
 

//conexion resultados de cada ejercicio.

// Reto 1
document.getElementById('btn-reto1').addEventListener('click', function() {
  const resultado = identificarPrimitivos();
  document.getElementById('resultado-reto1').textContent = JSON.stringify(resultado, null, 2);
});
 
// Reto 2
document.getElementById('btn-reto2').addEventListener('click', function() {
  const valor = document.getElementById('input-reto2').value;
  const resultado = diferenciarStringNumber(valor);
  document.getElementById('resultado-reto2').textContent = JSON.stringify(resultado, null, 2);
});
 
// Reto 3
document.getElementById('btn-reto3').addEventListener('click', function() {
  const resultado = explorarNull();
  document.getElementById('resultado-reto3').textContent = JSON.stringify(resultado, null, 2);
});
 
// Reto 4
document.getElementById('btn-reto4').addEventListener('click', function() {
  const resultado = compararNullUndefined();
  document.getElementById('resultado-reto4').textContent = JSON.stringify(resultado, null, 2);
});
 
// Reto 5
document.getElementById('btn-reto5').addEventListener('click', function() {
  const resultado = crearSymbolYBigInt();
  // JSON.stringify no soporta BigInt directamente (lanza error),
  // por eso convertimos el bigint a string antes de mostrarlo.
  document.getElementById('resultado-reto5').textContent = JSON.stringify(
    resultado,
    (key, value) => typeof value === "bigint" ? value.toString() + "n" : value,
    2
  );
});
 
// Reto 6
document.getElementById('btn-reto6').addEventListener('click', function() {
  const resultado = crearObjeto();
  document.getElementById('resultado-reto6').textContent = JSON.stringify(resultado, null, 2);
});
 
// Reto 7
document.getElementById('btn-reto7').addEventListener('click', function() {
  const resultado = trabajarConArreglos();
  document.getElementById('resultado-reto7').textContent = JSON.stringify(resultado, null, 2);
});



});