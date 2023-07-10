const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js")
const {validateURL} = require("../models/validations.js")

// GET
//Back-end: `Index` resource A route exists to read all resources.
transactions.get("/", (req, res) => {
    res.json(transactionsArray)
  })

//SHOW 
//Back-end: `Show` resource A route exists to read a single resource.
transactions.get("/:id", (req, res) => {
    const {id} = req.params
    if (transactionsArray[id]) {
      res.json(transactionsArray[id]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

//CREATE
//Back-end: `New` resource A route exists to create new resources.
transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
  });


//DELETE
// Back-end: `Delete` resource A route exists to delete a single resource.
transactions.delete('/:id', (req, res) => {
    const { id } = req.params

    if (transactionsArray[id]) {
        const deletedTransactions = transactionsArray.splice(id, 1)
        res.status(202).json( deletedTransactions)
    } else {
        res.status(404).json({error: `There is no transaction with the id of ${id}`})
    }
})


//UPDATE
//Back-end: `Update` resource A route exists to update a single resource.
transactions.put("/:id", validateURL, async (req, res) => {
    const { id } = req.params
    if (transactionsArray[id]) {
      transactionsArray[id] = req.body;
      console.log("PUT route successful", req.body )
      res.status(200).json(transactionsArray[id]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

  module.exports = transactions