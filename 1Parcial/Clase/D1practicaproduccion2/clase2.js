class Prueba
{
    constructor(nombre,apellido)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }
    persona = {
        nombre:"",
        apellido:"",
        esDocente:"",
        geocalizacion:{
            lat:234.234,
            lng:34.345345,
        },
        prueba: ()=>{
            return this.nombre;
        }
    }
}
let personax= new Prueba('Bart', 'Simpson');
console.log(personax.persona.prueba())