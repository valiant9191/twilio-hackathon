require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()
const cookieParser = require('cookie-parser')

const userRouter = require('./resources/user/user.router')
const authRouter = require('./resources/user/auth.router')
const eventRouter = require('./resources/event/event.router')
const messageRouter = require('./resources/message/message.router');

app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use("/", (req, res, next) => {
  if (req.originalUrl === "/") {
    res.json({ message: "Service is running!" });
    return;
  }
  next();
})



app.use('/register', userRouter)
app.use('/auth', authRouter)
app.use('/event', eventRouter)
// app.use('/', messageRouter);


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

module.exports = app
