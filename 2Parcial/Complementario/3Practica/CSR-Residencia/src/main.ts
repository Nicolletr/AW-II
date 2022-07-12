import { registrar, editar, consultar, eliminar, limpiar } from './controllers/residencia';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Residencia</h1>
`
const etiqueta = document.createElement("label");
etiqueta.textContent = "Id Residencia"

const input = document.createElement("input");
input.id = "id"

etiqueta.htmlFor="id"
input.style.marginLeft = "1%"

app.appendChild(etiqueta);
app.appendChild(input);

app.innerHTML += `
<br><br><label for="nombre">Nombre</label><input id="nombre" style='margin-left:8%'></input><br><br>
  <label for="idPropietario">idPropietario</label><input id="idPropietario"style='margin-left:6%'></input><br><br>
  <label for="CantidadHabitaciones">Cantidad Habitaciones</label><input id="CantidadHabitaciones"style='margin-left:1%'></input><br><br>
  <label for="direccion">Direccion</label><input id="direccion"style='margin-left:8%'></input><br><br><br>

  <button id="registrar">Registrar Residencia</button>
  <button id="editar">Editar Residencia</button>
  <button id="consultar">Consultar Residencia</button>
  <button id="eliminar">Eliminar Residencia</button>
  <button id="limpiar">Limpiar Campos</button>
  <div id="cuerpo"/>
`
//Configuration buttons
const grabar = document.querySelector<HTMLButtonElement>('#registrar')!;
const edit = document.querySelector<HTMLButtonElement>('#editar')!;
const consult = document.querySelector<HTMLButtonElement>('#consultar')!;
const borrar = document.querySelector<HTMLButtonElement>('#eliminar')!;
const clean = document.querySelector<HTMLButtonElement>('#limpiar')!;

//Configuration fields
const id = document.querySelector<HTMLInputElement>('#id');
const nombre = document.querySelector<HTMLInputElement>('#nombre');
const idPropietario = document.querySelector<HTMLInputElement>('#idPropietario');
const CantidadHabitaciones = document.querySelector<HTMLInputElement>('#CantidadHabitaciones');
const direccion = document.querySelector<HTMLInputElement>('#direccion');
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo');

//Asignación de métodos 
grabar.addEventListener('click',()=>{
  registrar(nombre, idPropietario, CantidadHabitaciones, direccion)
})
edit.addEventListener('click',()=>{
  editar(id,nombre, idPropietario, CantidadHabitaciones, direccion)
})
consult.addEventListener('click',()=>{
  consultar(id,nombre, idPropietario, CantidadHabitaciones, direccion,cuerpo)
})
borrar.addEventListener('click',()=>{
  eliminar(id)
})
clean.addEventListener('click',()=>{
  limpiar(id,nombre, idPropietario, CantidadHabitaciones, direccion)
})

