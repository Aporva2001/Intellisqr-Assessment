const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt= require('jsonwebtoken');

exports.postLoginController = (req, res, next) => {
    const {email, password}= req.body;
    User.findOne({email: email})
    .then(user =>{
        if(!user)
        {
            throw new Error('User does not exists');
        }
    bcrypt.compare(password, user.password)
    .then(result =>{
        if(!result){
            throw new Error('Incorrect email/password');
        }
     const token = jwt.sign({ id: user._id.toString() }, 'somesupersecretsecret', { expiresIn: "1h" });


    res.json({userId: user._id, token: token});
    })
    })
};

exports.postSignUpController = (req, res, next) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                throw new Error('User exists already');
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const user = new User({
                name,
                email,
                password: hashedPassword
            });
            return user.save();
        })
        .then(result => {
            console.log("User created successfully", result);
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
};
