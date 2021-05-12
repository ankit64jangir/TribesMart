const express = require('express');
const router = express.Router();
const { Seller } = require("../models/Seller");
const { authseller } = require("../middleware/authseller");

// const async = require('async');

//=================================
//             Seller
//=================================




router.get("/authseller", authseller, (req, res) => {
    res.status(200).json({
        _id: req.seller._id,
        isAdmin: req.seller.role === 1 ? false : true,
        isAuth: true,
        email: req.seller.email,
        name: req.seller.name,
        lastname: req.seller.lastname,
        role: req.seller.role,
        image: req.seller.image,
        cart: req.seller.cart,
        history: req.seller.history
    });
});

console.log(Seller);

router.post("/sellerRegister", (req, res) => {

    const seller = new Seller(req.body);
   
    seller.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/sellerLogin", (req, res) => {
    Seller.findOne({ email: req.body.email }, (err, seller) => {
        if (!seller)
            return res.json({
                loginSuccessSeller: false,
                message: "Auth failed, email not found"
            });

        seller.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccessSeller: false, message: "Wrong password" });

            seller.generateToken((err, seller) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", seller.tokenExp);
                res
                    .cookie("w_authseller", seller.token)
                    .status(200)
                    .json({
                        loginSuccessSeller: true, sellerId: seller._id
                    });
            });
        });
    });
});

router.get("/logout", authseller, (req, res) => {
    Seller.findOneAndUpdate({ _id: req.seller._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});



module.exports = router;
