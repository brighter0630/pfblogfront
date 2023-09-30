const mongoose = require("mongoose");

const pfSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true,
  },
  dateOfTransaction: {
    type: Date,
    required: true,
  },
  typeofTransaction: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Pf", pfSchema);
