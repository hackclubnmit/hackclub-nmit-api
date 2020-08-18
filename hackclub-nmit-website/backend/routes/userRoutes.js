const express = require('express');
const userController = require('../controllers/userController')
const Route = express.Router();

const passport = require('passport');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
Route.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
Route.get('/register', forwardAuthenticated, (req, res) => res.render('register'));
Route.post('/signup',
    //validations has to be done.
     userController.Signup

);
Route.post('/login',
     //validations has to be done.
     passport.authenticate('local'),
     (req, res,next)=> {
         console.log(req.user);
         next();
       }

);

module.exports=Route;