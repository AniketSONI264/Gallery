const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// const imageRoutes = require('../src/routes/image.route');

app.use(cors({
  orign: '*',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Romantic Photo Album API is running ❤️'
  });
});
// app.use('/api/images', imageRoutes);
app.use('/api/images', require('./routes/image.routes'));
app.use('/api/admin', require('./routes/admin.routes'));
app.use('/api/images', require('./routes/image.routes'));
app.use('/api/texts', require('./routes/text.routes'));
app.use("/api/music", require("./routes/Music"));


module.exports = app;
