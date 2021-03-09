import { ReturnData, RegisterClient } from '../Controllers/UserController';
import { RegisterVehicle } from '../Controllers/VehicleController';
import { RegisterCrashEvent } from '../Controllers/CrashEventController';
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
    handler: ReturnData.bind(ReturnData),
  },
  {
    method: 'POST',
    path: '/client',
    handler: RegisterClient.bind(RegisterClient),
  },
  {
    method: 'POST',
    path: '/vehicle',
    handler: RegisterVehicle.bind(RegisterVehicle),
  },
  {
    method: 'POST',
    path: '/crashevent',
    handler: RegisterCrashEvent.bind(RegisterCrashEvent),
  },
];
