const express = require('express');

const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config


// Connect to MongoDB
mongoose
  .connect(
    "mongodb://localhost:27017/hackclub",
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// sessionn

// Express body parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash


// Global variables


// Routes

app.use('/users', require('./routes/userRoutes.js'));
app.use('/event',require('./routes/eventRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));