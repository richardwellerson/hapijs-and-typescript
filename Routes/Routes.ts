import * as Controllers from '../Controllers/UserController';
import NotFound from '../Controllers/NotFound';

const RequestMethods: Array<String> = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

const NotFoundMethods = RequestMethods.map((method) => (
  {
    method: `${method}`,
    path: '/{any*}',
    handler: NotFound.bind(NotFound),
  }
));

export const Routes: Array<{
  method: string,
  path: string,
  plugin?: Function,
  handler: Function
}> = [
  ...NotFoundMethods,
  {
    method: 'GET',
    path: '/',
    handler: Controllers.ReturnData.bind(Controllers.ReturnData),
  },
  {
    method: 'POST',
    path: '/',
    handler: Controllers.RegisterClient.bind(Controllers.RegisterClient),
  },
];
