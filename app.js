const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router');
const configs = require('./config/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.json('WELCOME')
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Unknown error',
        status: err.status || 500
    });
});

app.listen(4900, async () => {
    await mongoose.connect('mongodb://localhost:27017/admin');
    console.log(`Server listen ${4900}`);
});