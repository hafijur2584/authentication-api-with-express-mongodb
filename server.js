const express = require("express");
const cors = require("cors");

const app = express();

const config = require("./app/config/config");

require("./app/config/db.config");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// parse application/json
app.use(express.json())

app.use(cors());
app.options('*',cors());

//routes

// landing route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to authentication api with express & mongodb" });
});

const userRoute = require("./app/routes/auth.route");
//user route
app.use(`${config.app.url}/users`, userRoute);

app.use((req, res, next) => {
    res.status(404).send({
        message: "404 not found."
    });
});

app.listen(config.app.port,() => {
    console.log(`App is at http://localhost:${config.app.port}`);
});