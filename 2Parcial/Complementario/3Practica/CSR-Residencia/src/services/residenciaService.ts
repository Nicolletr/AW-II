import axios from 'axios';
import {IResResidencia} from '../interfaces/IResidencia'

export const _http = axios.create({
    baseURL: 'http://localhost:3100/v1/prueba/proyecto/residencias'
})

export const postResidencia = async (url:string, data: IResResidencia[]) => {
    return await _http.post(url, data)
}
export const getResidencia = async (url:string) => {
    return await _http.get(url)
}
export const putResidencia = async (url:string, data: IResResidencia[]) => {
    return await _http.put(url, data)
}
export const deleteResidencia = async (url:string) => {
    return await _http.delete(url)
}

export const errorAxios = (error: Error) => {
    if(axios.isAxiosError(error)){
        console.log('Error en el servidor');
    }
}    
