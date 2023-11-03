const app = require('./app');
const config = require('./config');
const mongoose = require('mongoose');



async function mainServer() {
  await mongoose.connect(config.database_url);
  console.log(`🛢 Database is connected successfully`);

  const server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error) => {
    console.log(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

mainServer();
