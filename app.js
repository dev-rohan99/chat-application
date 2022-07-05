// external imports
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

// internal imports
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');
const loginRouter = require('./routes/loginRouter');
const usersRouter = require('./routes/usersRouter');
const inboxRouter = require('./routes/inboxRouter');

// mongodb connection

const MONGODB_CONNECT = process.env.MONGO_CONNECTION || 8080;

mongoose.connect(MONGODB_CONNECT, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log('Connected!');
}).catch((err) => {
    console.log(err);
});

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRECT))

// routing
app.use('/api/user', loginRouter);
app.use('/api/user/users', usersRouter);
app.use('/api/user/inbox', inboxRouter);

// error handling
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);


const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} PORT!`);
})

