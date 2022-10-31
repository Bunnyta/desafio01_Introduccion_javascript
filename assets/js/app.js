const price = 400000

function calcular() {

let input1 = document.querySelector("#inputAmount");
let cantidad = Number(input1.value);

let precioTotal = document.querySelector(".totalPrice > span");
let cantidadTotal = document.querySelector(".totalAmount > span");

let input2 = document.querySelector("#inputColor")
let colorElegido = document.querySelector(".chosenColor")

let button = document.querySelector(".btn");


   precioTotal.innerHTML =  + cantidad * Number(price);
   cantidadTotal.innerHTML = + cantidad;
   colorElegido.style.backgroundColor = input2.value;
}

