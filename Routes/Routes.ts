import ReturnData from '../Controllers/FirstController';

export const Routes: Array<{
  method: string,
  path: string,
  plugin?: Function,
  handler: Function
}> = [
  {
    method: 'GET',
    path: '/',
    handler: ReturnData,
  },
];


