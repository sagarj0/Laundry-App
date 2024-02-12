const express = require('express');
const connectDB = require('./mongoDB/config');
const customerRoutes = require('./Routes/Customer');

connectDB();

const app = express();
const port = 8000;

app.use(express.json());

app.use('/api/Customer', customerRoutes);

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
