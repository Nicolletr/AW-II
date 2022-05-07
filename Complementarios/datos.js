/* El proyecto está basado en una Residencia habitacional, ubicada en la ciudad de Manta
en la cual se podrán encontrar las residencias disponibles junto con sus habitaciones,
a su vez se contará con servicios adicionales los cuales podrán ser asignados mediante un contrato
*/ 

//Arreglo residencia en el cual se ubican las distintas residencias dentro del sistema con sus respectivos detalles.
const Residencias=[
{
    idResidencia: 1,
    nombre: "Residencia Buena Fe ",
    idPropietario: 1,
    CantidadHabitaciones:3,
    direccion:"Calle 12 avenida 1",
},
{
    idResidencia: 2,
    nombre: "Residencia Bonita",
    idPropietario:2,
    CantidadHabitaciones:2,
    direccion:"Ciudadela Universitaria"
}
]

//Arreglo Habitaciones en el cual se muestran las habitaciones de todas las residencias junto con sus especificaciones.
const Habitaciones=[
    {
        idHabitacion:1,
        tipo: "Habitación Simple",
        idResidencia:1,
        precio:100,
        disponibilidad:"Disponible",
    },
    {
        idHabitacion:2,
        tipo: "Habitación Doble",
        idResidencia:1,
        precio:200,
        disponibilidad:"ocupada",
    },
    {
        idHabitacion:3,
        tipo: "Habitación Doble",
        idResidencia:1,
        precio:210,
        disponibilidad:"Disponible",
    },
    {
        idHabitacion:4,
        tipo: "Habitación Simple",
        idResidencia:2,
        precio:110,
        disponibilidad:"Disponible",
    },
    {
        idHabitacion:5,
        tipo: "Habitación Simple",
        idResidencia:2,
        precio:115,
        disponibilidad:"Disponible",
    }
]

//Arreglo Propietario hace referncia al dueño de la residencia, especificando los datos personales del mismo.
const Propietarios=[
    {
        idPropietario:1,
        nombre:"Carlos Sabando",
        cedula:"1315678945",
        telefono:"0985745641",
    },
    {
        idPropietario:2,
        nombre:"Ana Cedeño",
        cedula:"1306754231",
        telefono:"0996758905",
    }
]

//Arreglo con los servicios adicionales que ofrecen las residencias y pueden ser adicionados al contrato
const ServiciosAdicionales=[
{
  idServicio:1,  
  nombre: "Liempieza de cuartos",
  precio:20,
},
{
    idServicio:2,
   nombre: "Parqueadero",
   precio:20,
},
{
    idServicio:3,
    nombre: "Comida",
    precio:100,
},
{
    idServicio:4,
    nombre: "Lavandería",
    precio:10,
},
{
    idServicio:5,
    nombre: "Tv cable",
    precio:25,
},
{
    idServicio:6,
    nombre: "Internet",
    precio:25,
}
]

//Arreglo de los datos de quién está alquilando una de las habitaciones de una residencia.
const Residentes=[
    {
        idResidente:1,
        nombre:"María José Santana Minaya",
        cedula:"1315678545",
        telefono:"0976543456",
    }
]

//Arreglo que cumple con la función principal debido a que nos permite plantear los distintos servicio y necesidades del cliente
const Contratos =[
    {
        idContrato:1,
        idResidente:1,
        idHabitacion:1,
        idServicio:[1,2],
        fechainicio: "2022-01-10",
        fechafin:"2022-06-10",
    }
]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Está función permite la búsqueda  de una residencia de acuerdo a su nombre, se realizó mediante (Promise)  
function buscarResidencia(nombre)
 {
     return new Promise((resolve, reject)=>{
        const residencia  =  Residencias.find((residencia)=> residencia.nombre=== nombre);
        if (!residencia)
        {
            const error= new Error();
            error.message=`La ${nombre} no pudo ser encontrado`;
            reject(error);
        }
        resolve(residencia);

     })
 }

//Se realiza la Búsqueda por nombre de "Residencia Bonita"
buscarResidencia("Residencia Bonita").then((residencia)=>{
    return buscarResidencia(residencia.nombre)
}).then((residencia)=>{
    console.log(residencia)
})
.catch((motivo)=>{
    console.log("\n"+motivo.message+"\n")
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Esta función permite la búsqueda de habitaciones mediante su id, se realizó usando(Callback) 
function buscarHabitacionPorId(idHabitacion, callback)
{
    const habitacion = Habitaciones.find((habitacion)=> habitacion.idHabitacion===idHabitacion ); //se pone así ya que es una sola instrucción, sin llaves o return
    if (!habitacion)
    {
        const error = new Error();
        error.message =`Habitacion no encontrado con id ${idHabitacion}`;
        return callback(error)
    }
    return callback(null, habitacion);
}
//Se realiza la búsqueda de la habitación con el Id número 3
buscarHabitacionPorId(3,(err,habitacion)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(habitacion);
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Función que permite la búsqueda de habitaciones por precios, se realizó usando (Callback)
function buscarHabitacionPorPrecio(precio, callback)
{
    const habitacion = Habitaciones.find((habitacion)=> habitacion.precio===precio ); 
    if (!habitacion)
    {
        const error = new Error();
        error.message =`Habitación no encontrada con precio ${precio}`;
        return callback(error)
    }
    return callback(null, habitacion);
}
//Se realiza la búsqueda del precio (300) en este caso no hay ninguna habitación con ese precio 
//por lo que se muestra el mensaje de "Habitación no encontrada con precio 300"
buscarHabitacionPorPrecio(300,(err,habitacion)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(habitacion);
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Función que permite la consulta de las habitaciones disponibles, se realizó mediante (async)
async function buscarDisponibilidadHabitacion(disponibilidad) {
    const habitacion = Habitaciones.filter((habitacion) => habitacion.disponibilidad === disponibilidad);
    if (!habitacion) {
        const error = new Error();
        error.message = `No hay Habitaciones disponibles`;
        throw error;
    }
    return habitacion;
}
(async () => {
    try {
        const habitacion = await buscarDisponibilidadHabitacion("Disponible");
        console.log(habitacion);
    }
    catch(error){
        console.log(error.message)
    }
})();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Búsqueda por id de residente para saber los servicios adicionales que tiene
function buscarResidentePorIdPorServicios(idResidente, callback)
{
    const contrato = Contratos.find((contrato)=> contrato.idResidente===idResidente ); 
    if (!contrato)
    {
        const error = new Error();
        error.message =`Residente no encontrado con ${idResidente}`;
        return callback(error)
    }
    return callback(null, contrato);
}
buscarResidentePorIdPorServicios(1,(err,contrato)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log("\n"+contrato.idServicio+"\n");
})





