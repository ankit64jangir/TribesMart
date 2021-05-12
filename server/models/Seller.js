const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require('moment');

const sellerSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 1
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

sellerSchema.pre('save', function (next) {
    var seller = this;

    if (seller.isModified('password')) {
        console.log('password changed')
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(seller.password, salt, function (err, hash) {
                if (err) return next(err);
                seller.password = hash
                next()
            })
        })
    } else {
        next()
    }
});

sellerSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

sellerSchema.methods.generateToken = function (cb) {
    var seller = this;
    var token = jwt.sign(seller._id.toHexString(), 'secret')
    var oneHour = moment().add(1, 'hour').valueOf();

    seller.tokenExp = oneHour;
    seller.token = token;
    seller.save(function (err, seller) {
        if (err) return cb(err)
        cb(null, seller);
    })
}

sellerSchema.statics.findByToken = function (token, cb) {
    var seller = this;

    jwt.verify(token, 'secret', function (err, decode) {
        seller.findOne({ "_id": decode, "token": token }, function (err, seller) {
            if (err) return cb(err);
            cb(null, seller);
        })
    })
}

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = { Seller }