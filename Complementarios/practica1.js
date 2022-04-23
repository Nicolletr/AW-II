// 1.Función que reciba N como parámetro y genere la tabla de multiplicar por consola.
function tablaMultiplicar(num){

    console.log("\n**Tabla de"+num+"**\n")
    
    for(i = 1;i<=10;i++){

		  console.log(num + "x " + i + "= " + num * i);
	  }
}
tablaMultiplicar(7);

/* 2.Crear un objeto Comida que tenga como parámetros: 
nombre, ingredientes, tipo (ensalada, plato fuerte, entrada, etc.) 
y cualquier otro atributo que considere importante para su diseño.*/

console.log("\n**Objeto comida**\n")
const comida={
  nombre: "Tostada de queso",
  ingredientes:"pan, mantequilla, queso",
  tipo:"desayuno",
}
  console.log(comida)

//3.Definir un arreglo con sus comidas favoritas, teniendo como base el objeto del punto anterior.

console.log("\n**Comidas Favoritas**\n")
const comidaFav=[
{
  nombre: "galletas",
  ingredientes:"harina, leche, huevo, chocolate",
  tipo:"snack",
},
{
  nombre: "milkshake de oreo",
  ingredientes:"leche, helado, oreos, hielo",
  tipo:"bebida",
}
]
console.log(comidaFav)

//4.Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando 4 estructuras de repetición.

// for
let x =comidaFav.length;
function rep1(info,valor){
  console.log("\n**Estructura de repetición For**\n")
  for(i=0; i<valor; i++){
    console.log(info[i])
  }
}
rep1(comidaFav,x);

//forEach
function rep2(datos){
  console.log("\n**Estructura de repetición forEach**")
  datos.forEach(comidaFav =>{
    console.log("\nnombre: %s, ingrediente: %s, tipo: %s", comidaFav.nombre, comidaFav.ingredientes, comidaFav.tipo)
  });
}
rep2(comidaFav);


//While
function rep3(info,valor){
  console.log("\n**Estructura de repetición While**\n")
  let i=0;
  while(i < valor){
    console.log(info[i])
    i++;
  }
}
rep3(comidaFav,x);

//Do While
console.log("\n**Estructura de repetición Do While**\n")
i=0;
  do{
    console.log("nombre: %s, ingrediente: %s, tipo: %s", comidaFav[i].nombre, comidaFav[i].ingredientes, comidaFav[i].tipo)
    i++;
  }while(i < x)


/*5.Función flecha que reciba un arreglo de comidas 
y lo devuelva en mayúsculas y mejoras en su formato de presentación.*/

console.log("\n**Arreglo en Mayúscula**\n")
Array.prototype.toUpperCase = function() {
  return this.map(word => word.toUpperCase())
};
const comidas = ['galletas', 'empanadas', 'queso', 'lechuga'].toUpperCase(); 
for (const comidax of comidas) {
  console.log(comidax);
}