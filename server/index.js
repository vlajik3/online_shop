require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const app = express();

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server has started at port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
