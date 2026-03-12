import { Server } from "./server/server.ts";
import dotenv from "dotenv"

dotenv.config();


const server = new Server();

server.listen();