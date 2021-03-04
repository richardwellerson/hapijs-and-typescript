import { Request, ResponseToolkit } from 'hapi';

const ReturnData = (req: Request, res: ResponseToolkit, err?: Error) => {
  return res.response({
    message: 'Hey',
  }).code(200);
}

export default ReturnData;