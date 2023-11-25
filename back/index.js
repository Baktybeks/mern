require('dotenv').config();
const express = require('express');
const router = require('./routes/index');
const connectDB = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'WORKING' });
});

const start = async() => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch(err) {
    console.log(err);
  }
};
connectDB();
start();