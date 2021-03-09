import * as UserController from '../Controllers/UserController';
import * as VehicleController from '../Controllers/VehicleController';
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
    handler: UserController.ReturnData.bind(UserController.ReturnData),
  },
  {
    method: 'POST',
    path: '/client',
    handler: UserController.RegisterClient.bind(UserController.RegisterClient),
  },
  {
    method: 'POST',
    path: '/vehicle',
    handler: VehicleController.RegisterVehicle.bind(VehicleController.RegisterVehicle),
  }
];
