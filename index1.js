const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

//app.get('/barang', (req, res) => {
//  res.send('ini metode GET untuk barang');
//});

//app.post('/barang', (req, res) => {
// res.send('ini metode POST untuk barang');
//});

//app.put('/barang', (req, res) => {
//  res.send('ini metode PUT untuk barang');
//});

//app.delete('/barang', (req, res) => {
//  res.send('ini metode DELETE untuk barang');
//});

//app.all('/barang', (req, res) => {
//    res.send('ini metode all barang');
// });

//pp.get('/random.text', (req, res) => {
//    res.send('ini metode GET random text');
//  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
