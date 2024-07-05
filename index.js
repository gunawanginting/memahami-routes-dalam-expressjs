import express from 'express';
const app = express();
const port = 3000;
import router from './routers/index.js';

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

//app.get('/random.text', (req, res) => {
//    res.send('ini metode GET untuk random text');
//  });

//app.get('/ab?cd', (req, res) => {
//  res.send('ini metode GET untuk ad?cd');
//});

//app.get('/ab+cd', (req, res) => {
//  res.send('ini metode GET untuk ab+cd');
//});

//app.get('/ab*cd', (req, res) => {
//  res.send('ini metode GET untuk ab*cd');
//});

//app.get('/ab(cd)?e', (req, res) => {
//  res.send('ini metode GET untuk ab(cd)?e');
//});

//app
//.route("/barang")
//.get((req, res) => {
//  res.send('ini metode GET semua barang');
//})
//.post((req, res) => {
//  res.send('ini metode POST untuk barang');
//});

//app
//.route("/barang/:id")
//.get((req, res) => {
//  res.send(`ini metode GET barang dengan id = ${req.params.id}`);
//})
//.put((req, res) => {
//  res.send(`ini metode PUT barang dengan id = ${req.params.id}`);
//})
//.delete((req, res) => {
//  res.send(`ini metode DELETE barang dengan id = ${req.params.id}`);
//});

//const cb0=function(req,res,next){
//  console. log('callback 0');
//  next();
//}

//const cb1=function(req,res,next){
//  console. log('callback 2');
//  next();
//}

//const cb2=function(req,res,next){
//  console. log('callback 3');
//  next();
//}

//app.get("/example",[cb0, cb1, cb2,], (req,res) => {
//  res.send("ini metode get example");
//})

app.use(router);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});