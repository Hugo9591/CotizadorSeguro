# Cotizador de seguro de autos

## Descripcion
Pagina web que permite calcular el costo de un seguro de auto dependiendo de varios factores. el cotizador otma en cuenta la marca de auto,  el año y el tipo de sgeuro seleccionado
para calcular el precio con los incrementos y descuentos especificos.

## Caracteristicas
- Precio Base: el costo inicial del seguro es de $2000
- Marca de auto:
 - Americano: incremento del 15% en el seguro
 - Asiatico: incremento del 5% en el seguro
 - Europeo: incremento del 30% en el seguro
-  Año: un descuento del 3% por cada año de antiguedad del auto
-  Tipo de seguro:
  - Basico: incremento del 30%.
  - Completo: incremento del 50%.

## Uso
1. Selecciona la marca del vehiculo(Amricano, Asiatico, Europeo)
2. Escoge Año del Vehiculo
3. Selecciona el tipo de seguro(Basico, Completo)
4. Presionar el boton 'Cotizar Seguro'
5. El precio del seguro se calculara automaticamente, comenzando con un orecio base de $2000 ajustandose con el incremento de la marca y el tipo de seguro
    y aplicando un descuento del 3% por cada año de antiguedad del vehiculo.

## Tecnologias
- JavaScript: Para la logica del calculo del seguro mediante el uso de prototypes
- Tailwind.css: Para diseño de la interfaz de forma rapida y eficiente
- Custom.css: Estilos mas personalizados

## Instalacion
1. clonar el repositorio
  git clone https://github.com/Hugo9591/CotizadoSeguro.git
2. Abrir en el navegador el archivo index.html

  
   
