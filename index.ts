import * as dotenv from 'dotenv';
import * as Hapi from '@hapi/hapi';
import { Server, ResponseToolkit, Request } from 'hapi';

dotenv.config();

const { PORT, HOST } = process.env;

const initServer = async () => {
  const server: Server = Hapi.server(({
    port: PORT,
    host: HOST,
  }));

  await server.start();

  console.log(`Works at ${PORT}`);
};

initServer();