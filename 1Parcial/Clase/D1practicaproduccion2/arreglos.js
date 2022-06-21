const comida=[
    "tigrillo",
    "bolon Mixto",
    "pizza",
    "chaulafan",
    "hamburguesa",

    function(){
        return"Bandera";
    }
]
console.log(comida[5]())

//comida[0] = "yogurt";
//console.log(comida)

const desayuno = [...comida];
desayuno[3]="yogurt"
//console.log(comida)

const unionComidas= [...comida, ...desayuno];
//console.log(unionComidas)