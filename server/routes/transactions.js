import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .limit(100)
            .sort({ createdOn: -1 });
        res.status(200).json(transactions); //succes
    }
    catch (error) {
        res.status(404).json({ message: error.message });    //fail
    }
});

export default router;