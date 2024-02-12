const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  // order: {
  //   items: [
  //     {
  //       item_name: {
  //         type: String,
  //         required: true,
  //       },
  //       quantity: {
  //         type: Number,
  //         required: true,
  //       },
  //     },
  //   ],
  //   cost: {
  //     type: Number,
  //     required: true,
  //   },
  //   order_date: {
  //     type: Date,
  //     default: Date.now,
  //   },
  //   completion_date: {
  //     type: Date,
  //   },
  // },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
