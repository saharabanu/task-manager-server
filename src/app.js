
const cors = require('cors');
const express = require('express');
const httpStatus = require('http-status');
const globalErrorHandler = require('./app/middlewares/globalErrorHandler');
const routes = require('./app/routes')


const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


//parser
app.use(express.json());

app.use(
  cors({
    origin:['http://localhost:3000','https://task-management-client-one.vercel.app'],
    credentials: true,
  })
);






// health api
app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Task Manager server Api is running',
    
  });
});
app.use('/api/v1', routes);


//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

module.exports = app;
