import { IResResidencia, Residencia } from "../interfaces/IResidencia";
import { errorAxios, _http } from "../services/residenciaService";

const registrar = async (nombre: any, idPropietario: any, CantidadHabitaciones: any, direccion: any) => {
    const data: Residencia = {
        nombre: nombre.value,
        idPropietario: idPropietario.value,
        CantidadHabitaciones: CantidadHabitaciones.value,
        direccion: direccion.value,
    }
    try {
        const respResidencia: Residencia | any = await _http.post<Residencia>(
            `/registrar`,
            data)
        const residencia = await respResidencia.data
        console.log(`La residencia ${residencia.nombre} fue registrada correctamente`);
    } catch (error: Error | any) {
        errorAxios(error)
    }
}
const editar = async (id: any, nombre: any, idPropietario: any, CantidadHabitaciones: any, direccion: any) => {
    const data: Residencia | any = {
        id: id.value,
        nombre: nombre.value,
        idPropietario: idPropietario.value,
        CantidadHabitaciones: CantidadHabitaciones.value,
        direccion: direccion.value,
    }
    try {
        const respResidencia: Residencia | any = await _http.put<Residencia>(
            `/editar/${id.value}`,
            data
        )
        const residencia = await respResidencia.data
        console.log(`La residencia ${residencia.nombre} fue editada correctamente`);
    } catch (error: Error | any) {
        errorAxios(error)
    }
}
const consultar = async (id: any, nombre: any, idPropietario: any, CantidadHabitaciones: any, direccion: any, cuerpo: any) => {
    //Consulta General
    const resResidencia: IResResidencia = (await _http.get<IResResidencia>(`/`)).data;
    const tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.id = "tabla";
    tabla.border = "1"
    tabla.style.marginTop = '40px'
    tabla.style.marginLeft = '30%'

    const { residencias } = resResidencia;

    for (const residencia of residencias) {
        const row = tabla.insertRow();
        const celda = row.insertCell();
        celda.innerHTML = `<button class="boton" value=${residencia._id}>${residencia.nombre}</button>`
        const celda2 = row.insertCell();
        celda2.innerHTML = `${residencia.idPropietario}`
        const celda3 = row.insertCell();
        celda3.innerHTML = `${residencia.CantidadHabitaciones}`
        const celda4 = row.insertCell();
        celda4.innerHTML = `${residencia.direccion}`
    }

    //Consulta Individual
    cuerpo.innerHTML = ``;
    cuerpo.appendChild(tabla);
    document.querySelectorAll('.boton').forEach((btn: Element) => {
        btn.addEventListener('click', async () => {
            const idx = (btn as HTMLButtonElement).value;
            const { residencia }: Residencia | any = await (await _http.get<Residencia>(`/${idx}`)).data;
            console.log(residencia);
            id.value = residencia._id!;
            nombre.value = residencia.nombre;
            idPropietario.value = residencia.idPropietario;
            CantidadHabitaciones.value = residencia.CantidadHabitaciones;
            direccion.value = residencia.direccion
        });
    });
}
const eliminar = async (id:any) => {
    try {
        const respResidencia : Residencia | any = await _http.delete<Residencia>(
            `/eliminar/${id.value}`
        )
        const residencia = await respResidencia.data;
        console.log(`La residencia ${residencia.nombre} fue eliminada`);

    }catch (error: Error | any){
        errorAxios(error)

    }
}
const limpiar = (id: any, nombre: any, idPropietario: any, CantidadHabitaciones: any, direccion: any) => {
    id.value = ""
    nombre.value = ""
    idPropietario.value = ""
    CantidadHabitaciones.value = ""
    direccion.value = ""
}
export {
    registrar,
    editar,
    consultar,
    eliminar,
    limpiar
}