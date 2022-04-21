const persona={
    nombre:"Homero",
    apellido:"Simpson",
    esDocente:true,
    geocalizacion:{
        lat:234.234,
        lng:34.345345,
    },
    getNombreCompleto: function(){
        return'${this.nombre} ${this.apellido}'
    }
}
function mostrarDatos({nombre,apellido, geocalizacion:{lat, lng}})
{
console.log(nombre)
console.log(apellido)
console.log(lat)
console.log(lng)
}

mostrarDatos(persona)