const UserModel = require("../Model/UserModel");
const LocalStrategy = require("passport-local")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const GOOGLE_CLIENT_ID = "41226947545-jaomnddukhl5kspatmin6prj7bvqq3rl.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";
const SECRET_KEY = "this is y secret key for jwt";

function PassportAuth(){
    return new LocalStrategy({usernameField: "email", passwordField: "password"}, function(username, password, done){
        UserModel.findOne({email: username }, (err, user)=>{
            if(err){
                return done(err);
            }
            else if(!user){
                return done(null, false, {message: "Incorrect Email"});
            }
            else if(!bcryptjs.compareSync(password, user.password)){
                return done(null, false, {message: "Incorrect Password"});
            }
            return done(null, user);
        });
    });
}


// const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// function GoogleAuth(){
//     new GoogleStrategy({
//         clientID: GOOGLE_CLIENT_ID,
//         clientSecret: GOOGLE_CLIENT_SECRET,
//         callbackURL: "http://localhost:8000/google/callback",
//         passReqToCallback: true
//     },
//     function(request, accessToken, refreshToken, profile, done) {
//         UserModel.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//         });
//     })
// }

module.exports = {PassportAuth, /*GoogleAuth*/}