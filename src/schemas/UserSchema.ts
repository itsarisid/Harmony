import Joi from 'joi';

export const UserSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
}).meta({ className: 'User' });