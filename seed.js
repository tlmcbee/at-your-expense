require('dotenv').config()
require('./config/database')

const User = require('./models/user')

const admin = User.create({
  name: 'reveiwer', 
  email: 'admin@review.com',
  password: 'admincontrol',
  isAdmin: true
})
.exit