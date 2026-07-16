require("dotenv").config();

const app = require("./src/app");

const sequelize = require("./src/config/connection");
require("./src/models/User");


const PORT = process.env.PORT || 5000;


sequelize.sync()
    .then(() => {

        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server running ${PORT}`);
        })

    })
    .catch(err => {
        console.log(err);
    });