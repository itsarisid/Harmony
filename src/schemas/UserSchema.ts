import Joi from 'joi';

export const UserSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    profilePhoto: Joi.string(),
}).meta({ className: 'User' });


export const LoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
}).meta({ className: 'User' });