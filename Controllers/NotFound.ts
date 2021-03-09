import * as Hapi from '@hapi/hapi';

const NotFound = (_req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  return res.response({
    error: 'Route Not Found.',
    message: 'Access README to understand how this api works.',
    readme: 'https://github.com/richardwellerson/hapijs-and-typescript/blob/master/README.md',
  }).code(404);
};

export default NotFound;