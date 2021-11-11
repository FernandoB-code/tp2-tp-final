const jwt = require('jsonwebtoken');

module.exports = { 
  // generateAuthToken: function(user) {
  generateAuthToken(user) {
    
    const token = jwt.sign({ _id: user._id }, "process.env.SECRET", {
      expiresIn: '2h',
    })
    console.log("token: " + token)
    return token
  }
}
