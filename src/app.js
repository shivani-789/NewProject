const express = require("express");
const cors = require("cors");

const app = express();


// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Routes
const authRoutes = require("./routes/routes");
app.use("/api/auth", authRoutes);


// Default API
app.get("/", (req, res) => {
    res.json({
        message: "Node Auth API is running"
    });
});


// Export express app
module.exports = app;