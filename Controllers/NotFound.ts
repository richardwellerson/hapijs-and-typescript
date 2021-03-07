import * as Hapi from '@hapi/hapi';

const NotFound = (_req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  return res.response({
    error: 'Route Not Found',
  }).code(404);
};

export default NotFound;