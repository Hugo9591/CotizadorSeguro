//Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function (){
    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;//2300
            break;
        case '2':
            cantidad = base * 1.05;//2100
            break;
        case '3':
            cantidad = base * 1.35;//2700
            break;
        default:
            break;
    }
    //Leer año y cada año menos es un 3%menos
    const diferencia = new Date().getFullYear() - this.year;

    cantidad -= (( diferencia * 3) * cantidad) / 100;

    //Si el seguro basico aumneta un 30% mas y completo aumenta un 50%
    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }
    return cantidad;
}

//Obj de user interface mensajes de error o cualquier otro elemento
function UI() {}

UI.prototype.llenarOpciones = function (){
    const max = new Date().getFullYear();
    const min = max - 20;
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        selectYear.appendChild(opcion);
    }
}

UI.prototype.mostrarMensaje = function(mensaje, tipo){
    const div = document.createElement('DIV');

    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10', 'animacion');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#cargando'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}


UI.prototype.mostrarResultado = function(total, seguro){
    const { marca, year, tipo } = seguro;

    let textoMarca;

    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;

        case '2':
            textoMarca = 'Asiatico';
            break;

        case '3':
            textoMarca = 'Europeo';
            break;

        default:
            break;
    }

    const div = document.createElement('DIV');
    div.classList.add('mt-10', 'resultado');

    div.innerHTML = `
        <p class="header">Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultado = document.querySelector('#resultado');


    //Mostrar spinner
    const spinner = document.querySelector('#cargando');

    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        //agregarspinnner
        resultado.appendChild(div);
    }, 3000);
}
//INstancia de UI
const InsUI = new UI();

document.addEventListener('DOMContentLoaded', () =>{
    InsUI.llenarOpciones();
});

//Validar forulario
eventListeners();

function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    
    //Validar que los campos tengas informacion
    const marca = document.querySelector('#marca').value;
    const year = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name = "tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        InsUI.mostrarMensaje('Campos Vacios', 'error');
        return;
    }

    InsUI.mostrarMensaje('Cotizando...', 'correcto');

    //Instancia el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    InsUI.mostrarResultado(total, seguro);

    //Ocultar cotizaciones Previas
    const resultados = document.querySelector('#resultado div');

    if(resultados != null){
        resultados.remove();
    }

}


