const Joi = require("joi");
const User = require("../models/user.model");

const registerSchema = Joi.object({
    name: Joi.string().min(2).required(),
    phone: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .required(),
    street: Joi.string(),
    zip: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .required(),
});

const validateEmail = async (email) => {
    let user = await User.findOne({ email });
    return user ? false : true;
};
const validatePhone = async (phone) => {
    let user = await User.findOne({ phone });
    return user ? false : true;
};

module.exports = {
    registerSchema,
    loginSchema,
    validateEmail,
    validatePhone
}