const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3560;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', (req, res) => res.render('index'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
