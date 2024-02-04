const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
   date: {
    type: Date, 
    required: true
  },
  expenseType: {
    type: String,
    default: 'fuel',
  },
 description: {
  type: String
 },
  amount: {
    type: Number, 
    required: true
  },
  refFile: {
    type: String
  },

})

const reportSchema = new Schema({
  title: {type: String, required: true},
  expenses: [expenseSchema],
  isPending: {type: Boolean, default: false},
  isApproved: {type: Boolean, default: false},
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},{
  timestamps: true,
  toJSON: {virtuals: true}
})

reportSchema.virtual('expenseTotal').get(function() {
  return this.expenses.reduce((total, expense) => total + expense.amount, 0)
})

reportSchema.statics.getReport = function(userId) {
  return this.findOneAndUpdate(
    {user: userId, isPending: false, isComplete: false},
    {user: userId},
    {upsert: true, new: true}
  )
}

module.exports = mongoose.model('Report', reportSchema)