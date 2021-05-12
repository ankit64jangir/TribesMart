const { Seller } = require('../models/Seller');

let authseller = (req, res, next) => {
  let token = req.cookies.w_authseller;

  Seller.findByToken(token, (err, seller) => {
    if (err) throw err;
    if (!seller)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.seller = seller;
    next();
  });
};

module.exports = { authseller };
