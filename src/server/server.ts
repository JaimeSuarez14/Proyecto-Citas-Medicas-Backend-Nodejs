import express, { type Express } from "express";
import cors from "cors";
import { sequelize } from "../database/config.ts";
import dotenv from "dotenv";
import pacienteRouter from "../routes/paciente.route.ts";
dotenv.config();

export class Server {

  app: Express;
  port: string | number | undefined;
  PacientesPath: string;

  public constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.PacientesPath = "/pacientes";
    this.asociaciones();
    this.connectionToDB();
    this.middlewares();
    this.routes();
  }

  asociaciones(){}

  async connectionToDB(): Promise<void> {
    await sequelize.sync();
  }

  public middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  public routes() {
    this.app.use( this.PacientesPath, pacienteRouter)
  }

  public listen() {
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    this.app.listen(this.port, () =>
      console.log("Corriendo en el puerto 4000"),
    );
  }


}
