require("dotenv").config();

module.exports  = {
    app: {
        port:process.env.PORT || 4000,
        url:process.env.APP_URL
    },
    db: {
        url: process.env.DB_URL
    },
    jwt: {
        secret: process.env.SECRET,
        ttl: process.env.JWT_TIME
    }
};