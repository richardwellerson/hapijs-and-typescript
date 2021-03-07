import Joi from 'joi';

const User: object = Joi.object({
  name: Joi.string()
  .min(3)
  .max(50)
  .pattern(/[a-zçáéíóúàèìòùãâêîôû]/gi)
  .required(),
});