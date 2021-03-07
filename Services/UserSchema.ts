import Joi from 'joi';

const User: object = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .pattern(/[a-zçáéíóúàèìòùãâêîôû]/gi)
    .required(),
  email: Joi.string()
    .min(6)
    .max(70)
    .email()
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
  vehicle: Joi.string()
    .min(7)
    .max(9)
    .alphanum()
    .required(),
});