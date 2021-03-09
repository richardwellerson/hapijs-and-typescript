import * as Hapi from '@hapi/hapi';
import { VehiclePayload } from '../Services/Types';
import { Vehicle } from '../src/entity/Vehicle';
import { createConnection } from 'typeorm';

export const RegisterVehicle = (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  const {
   licensePlate,
   model,
   user,
  } = req.payload as VehiclePayload;

  const newVehicle = new Vehicle();

  newVehicle.licensePlate = licensePlate;
  newVehicle.model = model;
  newVehicle.user = user;

  createConnection().then(async (connection) => {
    await connection.manager.save(newVehicle);
  });

  return res.response({
    status: 'Created.',
    data: newVehicle,
  }).code(201);
};