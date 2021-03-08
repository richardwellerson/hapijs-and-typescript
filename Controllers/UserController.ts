import * as Hapi from '@hapi/hapi';
import * as Types from '../Services/Types';
import { User } from '../src/entity/User';
import { createConnection } from 'typeorm';


export const ReturnData = (_req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  return res.response({
    message: 'Hey',
  }).code(200);
};

export const RegisterClient = (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  const {
    name,
    email,
    password,
    phone,
    driverLicense,
  } = req.payload as Types.UserPayload;

  const newUser = new User();

  newUser.name = name;
  newUser.email = email;
  newUser.password = password;
  newUser.phone = phone;
  newUser.driverLicense = driverLicense;
  newUser.role = true;

  createConnection().then(async (connection) => {
    await connection.manager.save(newUser);
  })
  .catch((err: string) => res.response({
    status: `Error: ${err}`,
  }));
  
  return res.response({
    status: 'Created.',
    data: newUser,
  }).code(201);
};