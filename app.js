const express = require('express');
const path = require('path');
const app = express();
const { sequelize } = require('./models');

// Middleware
app.use(express.urlencoded({ extended: false }));
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

// Sequelize checking
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// routing
const routes = require('./routes');
app.use('/', routes);

// Running
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
