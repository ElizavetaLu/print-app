const jwt = require("jsonwebtoken");
const User = require('../models/user');
const config = require("../config");
const { secret } = require("../config");

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.sign({ sub: user._id, iat: timestamp }, config.secret)
};

exports.logIn = (req, res, next) => {
    res.send({ token: tokenForUser(req.user), name: req.user.name })
};

// exports.check = (req, res, next) => {

//     const token = req.headers['token'];
//     if (!token) return res.status(400).send({ error: "Token doesn't exist" });

//     jwt.verify(token, config.secret, (err) => {
//         if (err) return res.status(401).json({ success: false });
//         return res.json({ success: true })
//     })
// };

exports.signUp = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!email || !password) return res.status(422).send({ error: 'You must provide email and password' })

    User.findOne({ email }, (err, existingUser) => {
        if (err) return next(err);

        if (existingUser) return res.status(422).send({ error: 'Email is in use' });

        const user = new User({
            name,
            email,
            password
        });

        user.save(err => {
            if (err) return next(err);
            res.json({ token: tokenForUser(user), name })
        });
    })
}

exports.forgotPasswordPost = (req, res, next) => {

    const { email } = req.query;

    if (!email) return res.status(422).send({ error: 'You must provide an email' });

    User.findOne({ email }, (err, existingUser) => {
        if (err) return next(err);
        if (!existingUser) return res.status(422).send({ error: "User with such email doesn't exist" });


        //one time link
        const newSecret = secret + existingUser.password;
        const payload = {
            email: existingUser.email,
            id: existingUser._id
        };
        const token = jwt.sign(payload, newSecret, { expiresIn: '15m' });
        const link = `http://localhost:5050/resetPassword/${existingUser._id}/${token}`

        // console.log(link)
        //send link

        res.json('Password reset link has been sent to your email')
    })
}

exports.forgotPasswordGet = (req, res, next) => {
    const { id, token } = req.params;

    User.findById({ _id: id }, (err, existindUser) => {
        if (err) res.status(400).json({ error: 'User does nt exist' });

        // const newSecret = secret + existindUser.password;
    })

    // jwt.verify(token, secret, (err, verifide) => {

    //     if (!verifide) return res.status(400).json({ error: 'User does nt exist' });
    //     if (err) return res.status(401).json({ error: err });


    //     User.findById({ _id: id }, (err, existindUser) => {
    //         if (err) res.status(400).json({ error: 'User does nt exist' });

    //         const newSecret = secret + existindUser.password;
    //     })

    // })


}

exports.resetPassword = (req, res, next) => {

}
