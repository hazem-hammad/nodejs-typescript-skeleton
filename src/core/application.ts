import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { default as config } from "config/app";
import routerProvider from "app/routes.provider";
import connection from "core/database/connection";
const server = express();

const PORT = config.port;

server.use(bodyParser.json());

server.use(cors());

/**
 * Register routes
 */
server.use(routerProvider);

async function connectToServer() {
  try {
    // We can use the url of the server
    const address = await server.listen({ port: PORT });

    console.log(`Start browsing using http://localhost:${PORT}`);
  } catch (err) {
    process.exit(1); // stop the process, exit with error
  }
}

function connectToDatabase() {
  connection.authenticate();
}

export default async function startApplication() {
  connectToServer();
  connectToDatabase();
}
