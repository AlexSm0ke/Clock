const express = require('express');

const port = 3030;
const app = express();
const path = require('path'); 
const cors = require('cors');
const Router = require('express');

const router = new Router();

const fetch = require('node-fetch'); // Инициализируем фетчи (в клиентской части использовал axios)

app.use(cors({
  origin: true,
  credentials: true,
}));

app.get('/api', async (req, res) => {
  const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam');
  if (response.ok) {
    const data = await response.json();
    return res.json(data);
  } else {
    return res.setStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server has been sterted on port ${port}`);
});
