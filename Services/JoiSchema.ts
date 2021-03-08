import Joi from 'joi';

export const User = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .pattern(/[a-zçáéíóúàèìòùãâêîôû]/i)
    .required(),
  email: Joi.string()
    .min(6)
    .max(70)
    .email()
    .required(),
  password: Joi.string()
    .min(8)
    .max(16)
    .required(),
  phone: Joi.string()
    .min(11)
    .max(13)
    .pattern(/[0-9]/)
    .required(),
  driverLicense: Joi.string()
    .min(8)
    .max(20)
    .alphanum()
    .required(),
  vehicle: Joi.object({
    licensePlate: Joi.string()
      .min(7)
      .max(9)
      .alphanum()
      .required(),
    model: Joi.string()
      .min(2)
      .max(30)
      .alphanum()
      .required(),
  }),
});

export const Vehicle = Joi.object({
  licensePlate: Joi.string()
    .min(7)
    .max(9)
    .alphanum()
    .required(),
  model: Joi.string()
    .min(2)
    .max(30)
    .alphanum()
    .required(),
});

export const CrashEvent = Joi.object({
  client: Joi.number()
    .min(1)
    .required(),
  thirdParties: Joi.number()
    .min(1)
    .required(),
  details: Joi.string()
    .min(10)
    .max(100)
    .required(),
});