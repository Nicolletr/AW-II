import express from "express";
import cors from "cors";
import { Conexion } from "./src/database/config"
import { rutaresidencia } from "./src/routes/residencia"
class Server {
  app: express.Router; router: express.Router;
  port: Number; paths: { [key: string]: string };
  private _express: express.Express;
  constructor() {
    this.app = express.Router();
    this.router = express.Router();
    this.port = Number(3000);
    this.paths = {
      residencias: "/proyecto/residencias"
    };
    this.conectarBD();
    this.middlewares();
    this.routes();
    this.router.use("/v1/prueba", this.app);
    this._express = express().use(this.router);
  }
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
      console.log(`Servidor corriendo en http://localhost:${this.port}/v1/prueba/proyecto/residencias `);
    });
  }
}
export {
  Server
} 
