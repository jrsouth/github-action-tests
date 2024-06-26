import express from 'express';

const app = express();
const port = 3000;

const apiHost = process.env.API_HOST ?? 'api';
const apiPort = process.env.API_PORT ?? '3000';

app.get('/', (req, res) => {
  console.log('App get');
  fetch(`http://${apiHost}:${apiPort}/heartbeat`)
    .then((response) => response.text())
    .then((heartbeat) => {
      res.send(`Hello World! API connection is: ${heartbeat}`);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
