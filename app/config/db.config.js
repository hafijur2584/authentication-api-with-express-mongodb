const mongoose = require("mongoose");
const config = require("./config");


mongoose.connect(config.db.url)
.then(() => {
    console.log('Database connected successfully.');
}).catch((e) => {
    console.log(e);
    process.exit(1);
});