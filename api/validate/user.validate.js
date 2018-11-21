// User Model
const User = require('../models/user.model.js');

module.exports.checkUserName = async (req, res, next) => {
  const userName = req.body.userName;

  await User.findOne({ userName: userName }, function(err, obj) {
    if(!obj) return next();
    res.json({success: false, errors: {
      userName: 'User name đã tồn tại.',
      email: null
    }});
  })
}

module.exports.checkEmail = async (req, res, next) => {
  const email = req.body.email;

  await User.findOne({ email: email }, function(err, obj) {
    if(!obj) return next();
    res.json({success: false, errors: {
      userName: null,
      email: 'Địa chỉ Email đã tồn tại.'
    }});
  })
}