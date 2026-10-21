
"use strict";

// 1. Constante: IVA del 15 %
const IVA = 0.15;

// 2. Referencias a los elementos del HTML (DOM)
const inputProducto = document.querySelector("#producto");
const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

console.log("app.js cargado correctamente ✅");

// 3. Función que procesa la información
function calcularFactura() {

    // Leer los datos ingresados
    const producto = inputProducto.value.trim();
    const precio = Number(inputPrecio.value);
    const cantidad = Number(inputCantidad.value);

    console.log("Datos leídos:", producto, precio, cantidad);
    console.log("Tipo de precio:", typeof precio);

    // Validar los campos
    if (
        producto === "" ||
        inputPrecio.value === "" ||
        inputCantidad.value === "" ||
        !Number.isFinite(precio) ||
        !Number.isInteger(cantidad) ||
        precio <= 0 ||
        cantidad <= 0
    ) {
        resultado.innerHTML = `
            <p class="error">
                ⚠️ Completa todos los campos con valores válidos.
            </p>
        `;
        return;
    }

    // 4. Realizar los cálculos
    const subtotal = precio * cantidad;
    const valorIva = subtotal * IVA;
    const total = subtotal + valorIva;

    // 5. Mostrar los resultados en el HTML
    resultado.innerHTML = `
        <p><strong>${producto}</strong> × ${cantidad}</p>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>IVA (15 %): $${valorIva.toFixed(2)}</p>
        <p class="total">Total: $${total.toFixed(2)}</p>
    `;
}

// 6. Ejecutar la función al presionar el botón
btnCalcular.addEventListener("click", calcularFactura);
