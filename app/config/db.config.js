const mongoose = require("mongoose");
const config = require("./config");


mongoose.connect(config.db.url)
.then(() => {
    console.log('MongoDB atlas is connected.');
}).catch((e) => {
    console.log(e);
    process.exit(1);
});