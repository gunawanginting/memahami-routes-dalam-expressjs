import express from 'express';
const barangRouter = express.Router();

barangRouter
  .route("/")
  .get((req, res) => {
    res.send('ini metode GET semua barang');
  })
  .post((req, res) => {
    res.send('ini metode POST untuk barang');
  });

barangRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`ini metode GET barang dengan id = ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`ini metode PUT barang dengan id = ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`ini metode DELETE barang dengan id = ${req.params.id}`);
  });

export default barangRouter;
