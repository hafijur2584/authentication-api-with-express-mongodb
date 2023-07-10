require("dotenv").config();

module.exports  = {
    app: {
        port:process.env.PORT || 4000
    },
    db: {
        url: process.env.DB_URL
    }
};