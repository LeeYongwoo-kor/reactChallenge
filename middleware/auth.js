const { User } = require("../models/User.js");

let auth = (req, res, next) => {
  // 인증처리를 하는곳
  // 1. Client Cookie에서 Token을 가져온다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
  // 2. Token을 Decode한 후 User를 찾는다.
};

module.exports = { auth };
