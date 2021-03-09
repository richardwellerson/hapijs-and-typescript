export type UserPayload = {
  name: string,
  email: string,
  password: string,
  phone: string,
  driverLicense: string,
};

export type VehiclePayload = {
  licensePlate: string,
  model: string,
  user: number,
};

export type CrashEventPayload = {
  client: number,
  thirdParties: number,
  details: string,
};