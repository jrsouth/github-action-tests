import express from 'express';

const app = express();
const port = 3000;

app.get('/heartbeat', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
