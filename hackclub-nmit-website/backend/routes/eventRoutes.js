const express = require('express');
const userController = require('../controllers/userController')
const Route = express.Router();

const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');

Route.get('/register',ensureAuthenticated,(req,res,next)=>{
    //to do
    console.log('yes');
    next();
})
Route.get('/feedback',ensureAuthenticated,(req,res,next)=>{
    //to do
    console.log('yes');
    next();
})

module.exports = Route;
