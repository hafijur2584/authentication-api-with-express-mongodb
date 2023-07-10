const jwt = require('jsonwebtoken');
const config = require("../config/config");

exports.verifyToken = (token) => jwt.verify(token, config.jwt.secret);

exports.createToken = (data) => jwt.sign(data, config.jwt.secret, { expiresIn: config.jwt.ttl });