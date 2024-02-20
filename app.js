const express = require('express');
const path = require('path');
const app = express();
const morgan = require('./middlewares/morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

// middleware
app.use(morgan());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routing
const routes = require('./routes');
app.use('/', routes);

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT || 3560;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
