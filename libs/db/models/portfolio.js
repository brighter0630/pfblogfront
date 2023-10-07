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
  nasdaqAtTr: {
    type: Number,
    required: true,
  },
  snpAtTr: {
    type: Number,
    required: true,
  },
});

// 아래 부분을 추가해야 model overwrite 에러가 발생하지 않음.
module.exports = mongoose.model.pf ?? mongoose.model("Pf", pfSchema);
