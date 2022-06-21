/**Programacion asincronica */
const platos = [
    {
        id: 1,
        descipcion: 'Pizza',
        idrestaurantes: 1
    },
    {
        id: 2,
        descipcion: 'galletas',
        idrestaurantes: 1
    },
    {
        id: 3,
        descipcion: 'Hot-dog',
        idrestaurantes: 2
    },
    {
        id: 4,
        descipcion: 'milshake',
        idrestaurantes: 2
    }
]
const restaurantes = [
    {
        id: 1,
        nombre: 'Lo mejor de la casa'
    },
    {
        id: 2,
        nombre: 'Tony Restaurant'
    }
]

//funcion async await
async function buscarplatoID(id) {
    const plato = platos.find((plato) => plato.id === id);
    if (!plato) {
        const error = new Error();
        error.message = `plato no encontrado con id ${id}`;
        throw error;
    }
    return plato;
}
async function buscarrestauranteID(id) {
    const restaurante = restaurantes.find((res) => res.id === id);
    if (!restaurante) {
        const error = new Error();
        error.message = `restaurante no encontrado con id ${id}`;
        throw error;
    }
    return restaurante;
}

//esperar que la funcion se ejecute
//no va a funcionar hasta que no haya devuelto un valor
async function main() {
    const plato = await buscarplatoID(3);
    const res=await buscarrestauranteID(plato.idrestaurantes);
    console.log(plato)
    console.log(res)
}
main();

//llamadas a recursos asincronicos
(async () => {
    try {
        const plato = await buscarplatoID(3);
        const res = await buscarrestauranteID(plato.idrestaurantes);
        plato.res=res;
        delete plato.idrestaurantes;
        console.log(plato);
    }
    catch(error){
        console.log(error.message)
    }
})();