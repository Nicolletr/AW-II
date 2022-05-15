//Conexion con la libreria moongose
const mongoose = require('mongoose');
//Conexion la aplicaicion con mongodb usando su driver nativo
const conexion= "mongodb+srv://nicolle:nicolle123@cluster0.3hcmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//funion async para el ingreso y manejo de los datos
(async () => {

    //permite usar la variable de conexion e inicar la conexion con mongodb
    const estadoConexion = await mongoose.connect(conexion);

    ////////////////////////////////////////////////////
    //Propietario
    //Atributos de la Coleccion Propietarios
    const Propietarios = mongoose.model("Propietarios",
        {
            //Tipo de valor utilizados en los Documentos
            nombre: String,
            cedula: String,
            telefono: String,
        }
    );
    //Documentos de la colección Propietarios
    const Propietario1 = new Propietarios(
        {
            nombre: "Carlos Sabando",
            cedula: "1315678945",
            telefono: "0985745641"
        }
    );
    //Almacenar el grupo Propietario 1 y crear una instancia
    //Asegurar que el grupo este en la colección
    const guardoPropietario1 = await Propietario1.save();
    const Propietario2 = new Propietarios(
        {
            nombre: "Ana Cedeño",
            cedula: "1306754231",
            telefono: "0996758905"
        }
    );
    const guardoPropietario2 = await Propietario2.save();

    ////////////////////////////////////////////////////
    //Residencia
    //Atributos de la colección Residencia
    const Residencias = mongoose.model("Residencias",
        {
            //tipo de datos usados en el documento
            nombre: String,
            //clave foranea con referencia a la colección Propietarios
            idPropietario: { type: mongoose.Types.ObjectId, ref: "Propietarios" },
            CantidadHabitaciones: Number,
            direccion: String,
        }
    );

    //Documentos de la colección Residencias
    const Residencia1 = new Residencias(
        {
            nombre: "Residencia Buena Fe",
            idPropietario: guardoPropietario1._id,
            CantidadHabitaciones: 3,
            direccion: "Calle 12 avenida 1"
        }
    );
    //Almacenar los documentos en la constante para almacenarlos en la colección
    const guardoResidencia1 = await Residencia1.save();
    const Residencia2 = new Residencias(
        {
            nombre: "Residencia Bonita",
            idPropietario: guardoPropietario2._id,
            CantidadHabitaciones: 2,
            direccion: "Ciudadela Universitaria"
        }
    );
    const guardoResidencia2 = await Residencia2.save();

    ////////////////////////////////////////////////////
    //Habitacion
    //Campos de la colección Habitaciones
    const Habitaciones = mongoose.model("Habitaciones",
        {
            tipo: String,
            //clave foránea con referencia a la colección Residencia
            idResidencia: { type: mongoose.Types.ObjectId, ref: "Residencia" },
            precio: Number,
            disponibilidad: String,
        }
    );

    //Documentos de la colección Habitaciones
    const Habitacion1 = new Habitaciones(
        {
            tipo: "Habitación Simple",
            idResidencia: guardoResidencia1._id,
            precio: 100,
            disponibilidad: "Disponible",
        }
    );
    //Almacenar los documentos en la constante para almacenarlos dentro de la colección
    const guardoHabitacion1 = await Habitacion1.save();

    const Habitacion2 = new Habitaciones(
        {
            tipo: "Habitación Doble",
            idResidencia: guardoResidencia1._id,
            precio: 200,
            disponibilidad: "ocupada",
        }
    );
    const guardoHabitacion2 = await Habitacion2.save();
    const Habitacion3 = new Habitaciones(
        {
            tipo: "Habitación Doble",
            idResidencia: guardoResidencia1._id,
            precio: 210,
            disponibilidad: "Disponible",
        }
    );
    const guardoHabitacion3 = await Habitacion3.save();
    const Habitacion4 = new Habitaciones(
        {
            tipo: "Habitación Simple",
            idResidencia: guardoResidencia2._id,
            precio: 110,
            disponibilidad: "Disponible",
        }
    );
    const guardoHabitacion4 = await Habitacion4.save();
    const Habitacion5 = new Habitaciones(
        {
            tipo: "Habitación Simple",
            idResidencia: guardoResidencia2._id,
            precio: 115,
            disponibilidad: "Disponible",
        }
    );
    //Almacenar los documentos en la constante para almacenarlos dentro de la colección
    const guardoHabitacion5 = await Habitacion5.save();

    ////////////////////////////////////////////////////
    //Residentes
    //Atributos de la colección Residentes
    const Residentes = mongoose.model("Residentes",
        {
            //Tipos de valor usados en los campos de la coleccion
            nombre: String,
            cedula: String,
            telefono: String,
        }
    );

    const Residente1 = new Residentes(
        {
            nombre: "María José Santa Minaya",
            cedula: "1315678545",
            telefono: "0976543456",
        }
    );
    //Almacenar los documentos en la constante para almacenarlos dentro de la colección
    const guardoResidente1 = await Residente1.save();


    ////////////////////////////////////////////////////
    //Servicios Adicionales
    //Atributos de la colección Servicios Adicionales
    const ServiciosAdicionales = mongoose.model("ServiciosAdicionales",
        {
            //Tipos de valor usados en el campo, Numerico para poder almacenar precios
            nombre: String,
            precio: Number,
        }
    );

    const Servicio1 = new ServiciosAdicionales(
        {
            nombre: "Limpieza",
            precio: 20,
        }
    );
    //Almacenar los documentos en la constante para almacenarlos dentro de la colección
    const guardoServicio1 = await Servicio1.save();

    const Servicio2 = new ServiciosAdicionales(
        {
            nombre: "Parqueadero",
            precio: 20,
        }
    );
    const guardoServicio2 = await Servicio2.save();

    const Servicio3 = new ServiciosAdicionales(
        {
            nombre: "Comida",
            precio: 100,
        }
    );
    const guardoServicio3 = await Servicio3.save();

    const Servicio4 = new ServiciosAdicionales(
        {
            nombre: "Lavandería",
            precio: 10,
        }
    );
    const guardoServicio4 = await Servicio4.save();

    const Servicio5 = new ServiciosAdicionales(
        {
            nombre: "Tv cable",
            precio: 25,
        }
    );
    const guardoServicio5 = await Servicio5.save();

    const Servicio6 = new ServiciosAdicionales(
        {
            nombre: "Internet",
            precio: 25,
        }
    );
    const guardoServicio6 = await Servicio6.save();


    ////////////////////////////////////////////////////
    //Contrato
    //Atributos de la colección Contratos
    const Contratos = mongoose.model("Contratos",
        {
            //Clave foránerea con Id de la coleccion Residentes
            idResidente: { type: mongoose.Types.ObjectId, ref: "Residentes" },
            //Clave foránerea con Id de la coleccion Habitaciones
            idHabitacion: { type: mongoose.Types.ObjectId, ref: "Habitaciones" },
            //Clave foránerea con Id de la coleccion Servicios
            Servicios: {
                idServicio: { type: mongoose.Types.ObjectId, ref: "Habitaciones" },
            },
            //Tipo de campos usados en la coleccion de tipo fecha
            fechainicio: Date,
            fechafin: Date,
        }
    );

    const Contrato1 = new Contratos(
        {
            idResidente: guardoResidente1._id,
            idHabitacion: guardoHabitacion1._id,
            Servicios: {
                idServicio: guardoServicio1._id,
                idServicio: guardoServicio2._id,
            }
        }
    );
    //Almacenar los documentos para la coleccion Contratos
    const guardoContrato1 = await Contrato1.save();

    //Mostrar 
    const resultado = await Residencias.find()
        .populate("idPropietario");

    console.log(resultado[1])
})();