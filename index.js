const express = require('express');
const connectDB = require('./mongoDB/config');
const customerRoutes = require('./Routes/Customer');

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/Customer', customerRoutes);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
