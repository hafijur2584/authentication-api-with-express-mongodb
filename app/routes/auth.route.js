const express = require('express');


const route = express.Router();



const AuthController = require("../controllers/auth.controller");
const ErrorHandler = require('../middlewares/error.middleware');
const AuthGuard = require('../middlewares/auth.middleware');


route.post('/register', ErrorHandler(AuthController.register));

route.post('/login', ErrorHandler(AuthController.login));

route.post('/logout', AuthGuard, ErrorHandler(AuthController.logout));

route.post('/me', AuthGuard, ErrorHandler(AuthController.me));


module.exports = route;