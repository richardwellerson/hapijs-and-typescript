'use strict';

import "reflect-metadata";
import * as dotenv from 'dotenv';
import * as Hapi from '@hapi/hapi';
import { Routes } from './Routes/Routes';

import { Server } from 'hapi';

dotenv.config();

const { PORT, HOST } = process.env;

const server: Server = Hapi.server(({
  port: PORT,
  host: HOST,
}));

Routes.forEach((route) => server.route(route));

server.start();

console.log(`Works at ${PORT}`);