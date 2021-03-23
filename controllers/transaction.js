const Transaction = require("../models/transactionModel");

module.exports = {
  newTransaction: async (req, res) => {
    try {
      const transaction = new Transaction({
        ownerId: req.body.ownerId,
        bikeId: req.body.bikeId,
        renterId: req.body.renterId,
      });
      const successSave = await transaction.save();
      res.json({
        ownerId: successSave.ownerId,
        bikeId: successSave.bikeId,
        renterId: successSave.renterId,
      })
    } catch (error) {
      res.send(error)
    }
  },

  getAllByID: async (req, res) => {
    try {
      // const Transactions = await Transaction.find({ $or: [{ownerId: req.body.id}, {renterId: req.body.id} ] });
      const FoundTransactions = await Transaction.find({ renterId: req.params.id });
      res.json(FoundTransactions);
    } catch (err) {
      res.send(err);
    }
  },
}