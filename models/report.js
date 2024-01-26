const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  expenseType: {
    type: String,
    required: true
  },
  date: {
    type: Date, 
    required: true
  },
  amount: {
    type: Number, 
    required: true
  },
  refFile: {type: String}
})

const reportSchema = new Schema({
  title: {type: String, required: true},
  expenses: [expenseSchema],
  isPending: {type: Boolean, default: false},
  isComplete: {type: Boolean, default: false},
},{
  timestamps: true
})

module.exports = mongoose.model('Report', reportSchema)