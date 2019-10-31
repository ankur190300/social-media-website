const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const User = require('../models/JavaScript1');


//to check if the user is actually present in the database
passport.use(new localStrategy(

    { username: 'email' },
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            //if we can't connect to the database
            if (err) {
                console.log("there was an error in finding user in the database");
                return done(err);
            }
            //if the user is not present with the given email address
            if (!user || user.password != password) {
                console.log("incorrect username/password");
                return done(null, false);

            }

            return done(null, user);



        });
    }
)
);

//once the user is given take out the userid from  the database to give the cookie
passport.serializeUser(function (user, done) {
    return done(null, user.id);
});

//find the user based on the id given as cookie
passport.deserializeUser(function (id, done) {

    User.findById(id, function (err, user) {
        if (err) {
            console.log("there was an error in loading the user from the database ")
            return done(err);
        }
        return done(null, user);
        
    })
})

module.exports = passport;
