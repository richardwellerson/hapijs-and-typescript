import * as Hapi from '@hapi/hapi';
import * as Types from '../Services/Types';
import { CrashEvent } from '../src/entity/CrashEvent';
import { createConnection } from 'typeorm';

export const RegisterCrashEvent = (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  const {
    client,
    thirdParties,
    details,
  } = req.payload as Types.CrashEventPayload;

  const newCrashEvent = new CrashEvent();

  newCrashEvent.client = client;
  newCrashEvent.thirdParties = thirdParties;
  newCrashEvent.details = details;

  createConnection().then(async (connection) => {
    await connection.manager.save(newCrashEvent);
  });

  return res.response({
    status: 'Created.',
    data: newCrashEvent,
  }).code(201);
};