const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../database')

// Configure local login strategy

passport.use(new LocalStrategy(
  async function(username, password, done) {
    const user = await User.findOne({where: {username}})
    if (!user) {
      return done(null, false, {message: 'Incorrect username'})
    }  
    if (user.dataValues.password !== password) {
      return done(null, false, {message: 'Incorrect password'})
    }
    return done(null, user)
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  console.log('deserializing user...')
  const user = await User.findByPk(id)
  done(null, {id: user.dataValues.id, username: user.dataValues.username});
});

// Routes


router.use('*', (req, res, next) => { // Sends user session data to app
  if (req && req.user) {
    res.json(req.user)
  } else {
    next()
  }
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  // console.log(req.session)
  // console.log('req.flash')
  // console.log(req.user)
  res.json(req.user)
})

router.post('/signup', async (req, res, next) => {
  const {username, password} = req.body
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        username,
        password
      }
    })    
  } catch (err) {
    next(err)
  }
})

module.exports = router;

