//////////////////     Ejercicios con variables y operadores       ///////////////



// // //////////////// 0
// let nombre = window.prompt("Ingrese nombre");
// let apellido = window.prompt("Ingrese apellido");

// console.log( "Hola" + " " + nombre + " " + apellido);
// alert("Hola" + " " + nombre + " " + apellido);


// // ///////////// 1
// let primerNumero = parseInt(prompt("Ingrese un numero"));
// let segundoNumero = parseInt(prompt("Ingrese otro numero"));
// let resultado = primerNumero + segundoNumero;

// console.log("La suma de tus numero es:" + " " + resultado);
// alert( "La suma de tus numero es:" + " " + resultado);


// ///////////// 2
// let edad = parseInt(window.prompt("Cuantos años cumplio o cumple este año?"));
// let añoActual = 2021;
// let añoNacimiento = añoActual - edad;

// console.log("Naciste en el año:" + " " + añoNacimiento)
// alert("Naciste en el año:" + " " + añoNacimiento);


// ///////////// 3
// let balanceCuenta = 80000;

// alert("Tu balance de cuenta es:" + " " + balanceCuenta);

// let saldoRetirar = parseInt(window.prompt("Cuanto pesos desea retirar?"));
// let saldoRestante = balanceCuenta - saldoRetirar;

// console.log("Tu saldo actual es de:" + " " + saldoRestante)
// alert("Tu saldo actual es de:" + " " + saldoRestante);


// ///////////// 4
// let notaPrimerTrimestre = parseInt(window.prompt("Cual fue tu nota final en el primer trimestre?"));
// let notaSegundoTrimestre = parseInt(window.prompt("Y en el segundo trimestre?"));
// let notaTercerTrimestre = parseInt(window.prompt("Por ultimo necesito la del tercero para calcular tu promedio"));
// let notaFinal = Math.round((notaPrimerTrimestre + notaSegundoTrimestre + notaTercerTrimestre) / 3);

// console.log("Tu nota final es:" + " " + notaFinal)
// alert("Tu nota final es:" + " " + notaFinal);


// /////////// 5
// let NumeroEj5 = parseInt(prompt("Ingrese un numero"));
// let pies = NumeroEj5 / 40
// let centimetros = NumeroEj5 * 100
// let pulgadas = Math.round(centimetros / 2.54)


// alert("Tu numero convertido a pies es:" + " " + pies  + "\n" +
// "Tu numero convertido a centimetros es:" + " " + centimetros + "\n" 
// + "Tu numero convertido a pulgadas es:" + " " + pulgadas,);
// console.log("Tu numero convertido a pies es:" + " " + pies, "Tu numero convertido a centimetros es:" + " " + centimetros, "Tu numero convertido a pulgadas es:" + " " + pulgadas,);


/////////// 6

// let primerNumeroEj6 = parseInt(prompt("Ingrese un numero"));
// let segundoNumeroEj6 = parseInt(prompt("Ingrese otro numero"));

// let resultadoEj6 = primerNumeroEj6 + segundoNumeroEj6

// console.log("La suma de tus numero es:" + " " + resultadoEj6);
// alert( "La suma de tus numero es:" + " " + resultadoEj6);

// let tercerNumeroEj6 = parseInt(prompt("Ingrese otro numero"));
// let resultadoNuevoEj6 = resultadoEj6 * tercerNumeroEj6

// console.log("Ahora el resultado es:" + " " + resultadoNuevoEj6);
// alert( "Ahora el resultado es:" + " " + resultadoNuevoEj6);


/////// 7
// let numeroMinutos = parseInt(window.prompt("Ingresa un numero?"));

// let resultadoEnSegundos = numeroMinutos * 60;

// console.log("Tu numero en segundos es:" + " " + resultadoEnSegundos)
// alert("Tu numero en segundos es:" + " " + resultadoEnSegundos);


/////////// 8
// let numeroBase = parseInt(prompt("Ingrese un numero"));
// let numeroAltura = parseInt(prompt("Ingrese otro numero"));
// let resultadoRectangulo = numeroBase *  numeroAltura;

// console.log("El area de tu rectangulo es:" + " " + resultadoRectangulo);
// alert( "El area de tu rectangulo es:" + " " + resultadoRectangulo);


/////////// 9
// let numeroBaseEquilatero = parseInt(prompt("Ingrese un numero"));
// let numeroAlturaEquilatero = parseInt(prompt("Ingrese otro numero"));
// let resultadoTrianguloEquilatero = (numeroBaseEquilatero *  numeroAlturaEquilatero) / 2;

// console.log("El area de tu triangulo equilatero es:" + " " + resultadoTrianguloEquilatero);
// alert( "El area de tu triangulo equilatero es:" + " " + resultadoTrianguloEquilatero);


/////////// 10
// let numeroEj10 = parseInt(prompt("Ingrese un precio"));
// let numeroDescuento = parseInt(prompt("Ingrese un numero para descontar"));
// let resultadoPorcentaje = (numeroEj10 * numeroDescuento) / 100; 
// let resultadoConDescuento = numeroEj10 - resultadoPorcentaje


// console.log("El precio con descuento es $:" + " " + resultadoConDescuento);
// alert("El precio con descuento es $:" + " " + resultadoConDescuento);


/////////// 11
// let nombreEj11 = window.prompt("Ingrese nombre");
// let edadEj11 = parseInt(window.prompt("Cuantos años cumplio o cumple este año?"));

// let añoActualEj11 = 2021;
// let añoNacimientoEj11 = añoActualEj11 - edadEj11;

// console.log("Hola" + " " + nombreEj11 + " " + "naciste en el  año" + añoNacimientoEj11);
// alert("Hola" + " " + nombreEj11 + " " + "naciste en le año" + añoNacimientoEj11);

/////////// 12
// let nombreEj12 = window.prompt("Ingrese nombre");
// let temperatura = parseInt(window.prompt("Ingrese la temperatura del dia"));

// let temperaturaFarenheit = (temperatura * (9/5)) + 32;

// console.log(nombreEj12 + ": " + "la tempertura ingresada en Farenheit es:" + " " + temperaturaFarenheit);
// alert(nombreEj12 + ": " + "la tempertura ingresada en Farenheit es:" + " " + temperaturaFarenheit);


/////////// 13
// let nombreEj13 = window.prompt("Ingrese nombre");
// let temperaturaEj13 = parseInt(window.prompt("Ingrese la temperatura del dia"));

// let temperaturaCelsius = Math.round((temperaturaEj13 - 32) * (5/9));

// console.log(nombreEj13 + ": " + "la tempertura ingresada en Celsius es:" + " " + temperaturaCelsius);
// alert(nombreEj13 + ": " + "la tempertura ingresada en Celsuis es:" + " " + temperaturaCelsius);



/////////// 14
// let numeroEj14 = parseInt(window.prompt("Ingrese numero"));

// let sumaEj14 = numeroEj14 + 5;

// let multiplicacionEj14 = sumaEj14 * 10;

// let restoEj14 = multiplicacionEj14 / 3


// console.log(sumaEj14);
// console.log(multiplicacionEj14);
// console.log(restoEj14);

// Otra opcion para el 14
// let  numeroEj14 = parseInt(window.prompt( "Ingrese un numero" )) ;
// let sumaEj14 = numeroEj14 + 5;
// let multiplicacionEj14 = sumaEj14 * 10;
// let restoEj14 = multiplicacionEj14 % 3 ;
// console.log (sumaEj14);
// console.log (multiplicacionEj14);
// console.log (restoEj14);




////////////// 0  BONUS

// let primerNumeroString = window.prompt("Ingrese un numero");
// let segundoNumeroString = window.prompt("Ingrese otro numero");
// let numerosJuntos = primerNumeroString + segundoNumeroString


// console.log("La union de tus numero es:" + " " + numerosJuntos);
// alert("La union de tus numero es:" + " " + numerosJuntos);

///////////////// 1 BONUS
let conversorAños = window.prompt ("Ingrese cantidad de años")
let conversor = conversorAños*31104000

console.log("Los segundos en tus años es: " + conversor)
alert("Los segundos en tus años es: " + conversor);


let conversorDias = window.prompt ("Ingrese cantidad de dias")
let conversorD = conversorDias*86400

console.log("Los segundos en tus dias son: " + conversorD)
alert("Los segundos en tus dias son: " + conversorD);
