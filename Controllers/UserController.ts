import * as Hapi from '@hapi/hapi';
import { UserPayload } from '../Services/Types';
import { User } from '../src/entity/User';
import { createConnection } from 'typeorm';

export const ReturnData = (_req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  return res.response({
    message: 'Hey! Access README to understand how this api works.',
    readme: 'https://github.com/richardwellerson/hapijs-and-typescript/blob/master/README.md',
  }).code(200);
};

export const RegisterClient = async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  const {
    name,
    email,
    password,
    phone,
    driverLicense,
  } = req.payload as UserPayload;


  const infoUser = await createConnection().then(async (connection) =>
    connection.getRepository(User).find({ email })
  );

  if (infoUser && Object.keys(infoUser).length) {
    return res.response({
      message: 'User exists at database.',
      data: infoUser,
    }).code(409);
  }

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
  .catch((err) => res.response({
    error: err,
    
  }).code(500));

  return res.response({
    status: 'Created.',
    data: newUser,
  }).code(201);
};