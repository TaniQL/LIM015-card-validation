
const validator = {
  isValid(tarjeta){
    //Se obtienen dígitos en forma de array en base a lo ingresado en el campo tarjeta y se invierte el orden.
    const digito = Array.from(String(tarjeta), Number).reverse();

    /*Formular la multiplicación de los números en posición par del arreglo,
      con la condición de que si es mayor a 9, deben sumarse los dígitos y devolverlo al arreglo*/
    for(let i=0; i<digito.length; i++){
      if(i%2!=0){
         digito[i] = digito[i]*2;{
        if(digito[i]>9){
          digito[i] = parseInt(String(digito[i]).charAt(0)) + parseInt(String(digito[i]).charAt(1));
        }
      }
    }
    // Se tiene que sumar los números del arreglo y el residuo debe ser igual a 0
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var suma = digito.reduce(reducer);
    }
    //Comprobar que el residuo de la suma sea 0 para que la tarjeta sea válida
    suma = suma%10;
    if (suma==0){
      return true;
    } else {
      return false;
    }
  },
  maskify(tarjeta){
    //return tarjeta.slice(0,-4).replace(/./g,'#') + tarjeta.slice (-4);
    var mask = "";
    for(let i=0; i< tarjeta.length ;i++){
      if(i<=tarjeta.length-5){
        mask = mask + '#';
      }
      else{
        mask = mask + tarjeta[i];
      }
    }
    return mask;
  }

}
export default validator;
