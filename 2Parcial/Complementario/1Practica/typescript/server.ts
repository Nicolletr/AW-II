import express from "express";
import cors from "cors";
import { Conexion } from "./database/config"
import {rutaresidencia} from "./routes/residencia"
class Server {
  app: express.Router; router: express.Router;
  port: Number; paths:{ [key: string]: string };
  private _express: express.Express; 
  constructor() {
    this.app = express.Router();
    this.router = express.Router();
    //puerto utilizado que se encuentra en el archivo .env
    this.port = Number(3000) ;
    //this.port = Number(process.env["PORT"]) ;
    //ruta usada
    this.paths = {
      residencias: "/proyecto/residencias"
    };
    this.conectarBD(); 
    this.middlewares();    
    this.routes();
    this.router.use("/v1/prueba", this.app);
    this._express = express().use(this.router);
  }
  //esperando la conexion con la base de datos
  private async conectarBD() {
    await Conexion();
  }
  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  private routes() {
    this.app.use(this.paths.residencias, rutaresidencia);
  }

  listen() {
    this._express.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}
export{
  Server 
} 
