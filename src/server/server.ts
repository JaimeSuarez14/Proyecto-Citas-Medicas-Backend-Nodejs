import express,  {type Express} from "express";
import cors from "cors";
import { sequelize } from "../database/config.ts";
import dotenv from "dotenv";
dotenv.config();

export class Server {

  app: Express;
  port: string | number | undefined;

  public constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
  }

  async connectionToDB(): Promise<void> {
        await sequelize.sync()
    }


  public middlewares(){
    this.app.use(express.json());
    this.app.use(cors())

  }

  public listen() {
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    this.app.listen(this.port, () => console.log("Corriendo en el puerto 4000"));
  }
}
