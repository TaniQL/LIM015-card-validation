import validator from './validator.js';

//Realizar la funcionalidad de girar la tarjeta de crédito

const creditcard = document.querySelector('#creditcard');
const formulario = document.querySelector('#formulario-tarjeta');
const numeroTarjeta = document.querySelector('#creditcard .numero');
const nombreTarjeta = document.querySelector('#creditcard .nombre');
const logoMarca = document.querySelector('#logo-marca');
const firma = document.querySelector('#creditcard .firma p');
const expiracion = document.querySelector('#creditcard .expiracion');
const cvv = document.querySelector('#creditcard .cvv2');

//*Voltear la tarjeta para mostrar la parte delantera

const mostrarFrente = () => {
  if(creditcard.classList.contains('active')){
    creditcard.classList.remove('active');
  }
}

// *Rotación de la tarjeta al hacer un click.
creditcard.addEventListener('click', () => {
  creditcard.classList.toggle('active');
});


//----Input numero de tarjeta----/

formulario.inputNumero.addEventListener('keyup',(e) => {
  let valorInput=e.target.value;

  formulario.inputNumero.value =valorInput
  //Eliminar los espacios en blanco con el /\s/
  .replace(/\s/g, '')
  //Eliminar las letras para que solo ingresen números
  .replace(/\D/g, '')
  //Agregar espacio cada 4 números
  .replace(/([0-9]{4})/g,'$1 ')
  //Eliminar el último espaciado
  .trim();

  numeroTarjeta.textContent = valorInput;

  if(valorInput == ''){
    numeroTarjeta.textContent = "#### #### #### ####";
    logoMarca.innerHTML = '';
  }


//---Identifica 3 de las tarjetas más usadas en el país: Visa, Mastercard, American Express---/
  if(valorInput[0]== 4){
    logoMarca.innerHTML='';
    const imagen =document.createElement('img');
    imagen.src='img/logos/visa.png';
    logoMarca.appendChild(imagen);
  } else if(valorInput[0]==5){
    logoMarca.innerHTML='';
    const imagen =document.createElement('img');
    imagen.src='img/logos/mastercard.png';
    logoMarca.appendChild(imagen);
  }
  else if(valorInput[0]==3){
    logoMarca.innerHTML='';
    const imagen =document.createElement('img');
    imagen.src='img/logos/amax.png';
    logoMarca.appendChild(imagen);
  }

  //Voltear la tarjeta para que vea la parte delantera
  mostrarFrente();

});


//*Input nombre de tarjeta--/

formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput =e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g,'');
  nombreTarjeta.textContent= valorInput;
  firma.textContent = valorInput;

  if(valorInput== ''){
    nombreTarjeta.textContent = 'Jhon Doe';
  }

  mostrarFrente();
})


//*Input expiracion

formulario.SelectMes.addEventListener('keyup', (e) => {
  let valorInput =e.target.value;

  formulario.SelectMes.value= valorInput
  //Eliminar los espacios en blanco con el /\s/
  .replace(/\s/g, '')
  //Eliminar las letras para que solo ingresen números
  .replace(/\D/g, '');

  expiracion.textContent= valorInput;
  if(valorInput== ''){
    expiracion.textContent = 'MM/AA';
  }
  mostrarFrente();

  /* 
  let a = "1234"
	let transform = [];
	
	for(let i = 0;i < a.length; i += 2){
	  transform.push(a.substr(i, 2));
	}
	
	console.log(transform.join('/'));*/
})

//*Input cvv
formulario.inputCVV.addEventListener('keyup', () => {
  if(!creditcard.classList.contains('active')){
    creditcard.classList.toggle('active');
  }

  formulario.inputCVV.value = formulario.inputCVV.value
   //Eliminar los espacios en blanco con el /\s/
    .replace(/\s/g, '')
   //Eliminar las letras para que solo ingresen números
    .replace(/\D/g, '');
  cvv.textContent=formulario.inputCVV.value;
})

/*--------Cerrar el Modal----*/

let cerrar= document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".btn-enviar")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

/*---Dentro del modal, ingresar la función del validator---*/

abrir.addEventListener("click", function(e){
  e.preventDefault();
  let valorInput =document.getElementById("inputNumero").value;
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modalC.classList.toggle("modal-close");
  //document.getElementById("prueba").innerText = validator.maskify(valorInput);
  let mascara = validator.maskify(valorInput);
  document.getElementById("prueba2").innerText =validator.isValid(valorInput)?`La tarjeta ${mascara} es válida`:`La tarjeta ${mascara} no es válida`;

})

//validator.isValid(abrir);
//validator.maskify(abrir);

cerrar.addEventListener("click",function(){
  modal.classList.toggle("modal-close");
  setTimeout(function(){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  },500)
})

window.addEventListener("click",function(e){
  console.log(e.target)
  if(e.target == modalC){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  },500)
  }
})

/*
// Conectar el JS con HTML a través del botón "verificar"
const tarjeta = document.getElementById('verificar');
// Que reciba la señal del click
tarjeta.addEventListener("click",() => {
    let creditcardNumber = document.getElementById("inputNumero").value;
    let validatorCard = validator.isValid(creditcardNumber);
    let mascara = validator.maskify(creditcardNumber);
    if(validatorCard === true && creditcardNumber !== "") { 
      mascara;
      alert("La tarjeta"+ mascara + " es válida");
     }
      else if (creditcardNumber === "") {
        mascara;
        alert("Ingrese el número de la tarjeta."); 
    } else {
      alert("La tarjeta es incorrecta")
    }
    });
validator.isValid(tarjeta);
validator.maskify(tarjeta);*/

console.log(validator);
