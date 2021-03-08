import { User } from './JoiSchema';
import * as Hapi from '@hapi/hapi';

export const IsUserValid = (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
  const { error } = User.validate(req.payload);

  if (error) {
    console.log(error);
    return res.response({
      error,
    }).code(400);
  }

  return res.continue;
};