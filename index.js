const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const sequelize = require("./sequelize.js");
const db = require("./models");

const authRoutes = require("./routes/authRoutes.js")
const userRoutes = require("./routes/userRoutes.js")
const roleRoutes = require("./routes/roleRoutes.js")
const exportRoutes = require("./routes/exportRoutes.js")
const supplierRoutes = require("./routes/supplierRoutes.js")
const customerRoutes = require("./routes/customerRoutes.js")

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TEST ROUTES
app.get("/", (req, res) => {
    res.status(200).send("HELLO WORLD....");
});

// AUTH ROUTES
app.use("/api/v1/auth", authRoutes)

// USER ROUTES
app.use("/api/v1/users", userRoutes)

// ROLE ROUTES
app.use("/api/v1/roles", roleRoutes)

// EXPORT ROUTES
app.use("/api/v1/data", exportRoutes)

// SUPPLIER ROUTES
app.use("/api/v1/suppliers", supplierRoutes)

// CUSTOMER ROUTES
app.use("/api/v1/customers", customerRoutes)

// SYNC SEQUELIZE
db.sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ::: ${PORT}`));
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });
