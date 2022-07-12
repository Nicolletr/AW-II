export interface IResResidencia {
    total: number;
    residencias: Residencia[];
}
export interface Residencia {
    _id?:string,
    nombre:string,
    idPropietario:string,
    CantidadHabitaciones:number,
    direccion:string
}