const User = require("../models/user.model");

const bcryptUtils = require("../utils/bcrypt.util");
const jwtUtil = require("../utils/jwt.util");
const cacheUtil = require("../utils/cache.util");

const jwt = require('jsonwebtoken');

const config = require("../config/config");

exports.register = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcryptUtils.createHash(req.body.password),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        state: req.body.state,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country
    });

    user = await user.save();

    if (!user){
        return res.status(404).send('User cannot be created')
    }else{
        const token = jwtUtil.createToken({
            userID: user.id,
            isAdmin : user.isAdmin
        });
        return res.status(200).send({
            user: {
                id: user._id,
                email: user.email
            }, 
            access_token: token,
            token_type: "Bearer",
            exp: config.jwt.ttl
        });
    }
};

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email})

    if(!user) {
        return res.status(400).send('User with given Email not found');
    }

    if(user && bcryptUtils.compareHash(req.body.password, user.passwordHash)) {
        const token = jwtUtil.createToken({
            userID: user.id,
            isAdmin : user.isAdmin
        });

        return res.status(200).send({
            user: {
                id: user._id,
                email: user.email
            }, 
            access_token: token,
            token_type: "Bearer",
            exp: config.jwt.ttl
        });
    } else {
        res.status(400).send('Password is mismatch');
    }

    return res.status(200).send(user);
};

exports.logout = async (req, res) => {
    const now = new Date();
    const expire = new Date(req.body.exp * 1000);
    const milliseconds = expire.getTime() - now.getTime();
    /* ----------------------------- BlackList Token ---------------------------- */
    await cacheUtil.set(req.token, req.token, 380000000000);
    return res.json({ message: 'Logged out successfully.' });
};

exports.me  = async (req, res) => {
    let user = await User.findOne({_id: req.body.id}).select("-passwordHash");

    if(user){
        return res.send(user);
    }
}

