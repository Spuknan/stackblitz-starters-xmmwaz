const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola, mundo!' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});