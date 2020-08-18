const User = require('../models/User')

const mongoose  = require('mongoose');
const express = require('express');
const passport = require('passport');


//hashin password
const bcrypt = require('bcrypt');
const saltRounds = 10;



mongoose.connect("mongodb://localhost:27017/hackclub",{ useUnifiedTopology: true });

const { forwardAuthenticated } = require('../config/auth');
let errors = []

exports.Signup = async (req,res,next)=>{
    const { name , email , password , phone } =await req.body
    
    console.log(req.body)
    User.findOne({email:email})
    .then(async (user) => {
    
        if(user){
            console.log('this email already exists')
            
        }
        else{
            const newuser = new User({
                name,
                email,
                password,
                phone
            });
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    newuser.password = hash;
                });
            });
            
            newuser.save()
            .then((result)=>{
                console.log(result);
            })
            .catch((eror)=>{
                console.log(eror);
            })
        }
    })
};


 