const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

app.use(indexRouter);
app.use(userRouter);

app.listen(3000);
