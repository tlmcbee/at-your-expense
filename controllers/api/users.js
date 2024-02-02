const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  login,
  checkToken
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch(err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email})
    if(!user) throw new Error('Invalid credentials');
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error('Something went wrong try agaain');
    res.json(createJWT(user))
  } catch(err) {
    res.status(400).json(err)
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  res.json(req.exp);
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    { user }, 
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
