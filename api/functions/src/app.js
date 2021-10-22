const express = require('express');
const cors = require('cors');

const APP = express();

APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));
APP.use(cors());
APP.options('*', cors());



const tagRouter = require('./routers/tags.router');
const authRouter = require('./routers/auth.router');

APP.use('/auth', authRouter);
APP.use('/tags', tagRouter);

APP.use('/', async (req, res) => {
    return res.json({ message: 'Welcome' });
});

module.exports = APP;