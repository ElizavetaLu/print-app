const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const Order = require('./controllers/order');
const LocalStrategy = require('passport-local');
const fileUpload = require('express-fileupload')
const express = require('express');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = app => {

    app.get('/data', express.static('data'), (req, res) => {
        res.sendFile(__dirname + '/data/' + req.query.fileName);
    })

    app.get('/', requireAuth, (req, res) => {
        res.send({ success: true })
    })
    app.post('/logIn', requireLogin, Authentication.logIn);
    app.post('/signUp', Authentication.signUp);
    // app.get('/check', Authentication.check);
    
    app.post('/createNewOrder', fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }), Order.createNewOrder)


    app.post('/forgotPassword', Authentication.forgotPasswordPost);
    app.get('/forgotPassword/:id/:token', Authentication.forgotPasswordGet);
    app.post('/resetPassword', Authentication.resetPassword);
}