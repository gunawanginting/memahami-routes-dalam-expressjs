import express from 'express';
import barangRouter from './barang.js';

const router = express.Router();

router.use("/barang", barangRouter);

router.use("*", (req, res) => {
    res.status(404).send("Not Found");
});  

export default router;
