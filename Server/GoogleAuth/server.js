const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');

const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
  console.log(req.user.displayName)
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

const homePage = 'http://localhost:3000/'

app.get( '/google/callback',
  passport.authenticate( 'google', {
    successRedirect: homePage,
    failureRedirect: '/auth/google/failure'
  })
);


app.get(`${homePage}`, isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
  console.log(req.user.displayName)
});

/* app.get('/logout1', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
}); */

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

app.listen(5000, () => console.log('listening on port: 5000'));