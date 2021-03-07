import * as Hapi from '@hapi/hapi';

export const ReturnData = (_req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  return res.response({
    message: 'Hey',
  }).code(200);
};

export const RegisterClient = (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  console.log(req.payload);
  return res.response(req.payload);
};