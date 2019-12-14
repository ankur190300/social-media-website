
const User = require('../models/JavaScript1');

// render the user profile page 
module.exports.profile = function (req, res) {

    User.findById(req.params.id, function (err, user) {
        return res.render('profile',
            {
                title: 'profile',
                profile_user:user
            });

    })

   
};

module.exports.update = function (req, res) {

    if (req.params.id == req.user.id) {

        User.findByIdAndUpdate(req.params.id, { name: req.body.name, email:req.body.email }, function (err, user) {

            res.redirect('back');


        })


    }
    else {

        res.status(401).send('Unauthorized');
    }
}


//render the sign in page 
module.exports.signin = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in', {
        title: "user sign-in"
    });
};
 
//render the sign up page 
module.exports.signup = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up', {
        title: "user sign-up"
    });
};
//set up the user id create page 
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        console.log("the password and confirm password are not matching");
        return res.redirect("back");
    };
    User.findOne({ email: req.body.email }, function (err, user) {

        if (err) {
            console.log("there was an error in finding user in the database");
            return;
        }

        if (!user) {
            User.create(req.body, function (err, user) {

                if (err) {
                    console.log("there was an error in creating user in the database");
                    return;
                }
                return res.redirect("/users/sign-in");
            });
        }
        else {
            console.log("the account with this id is already set up");
            return res.redirect("back");
        }
    });
    
};

module.exports.createSession = function (req, res) {
    req.flash('success', 'Logged in successfully');

    return res.redirect('/');
};

module.exports.destroySession = function (req, res) {

    req.logout();
    req.flash('success', 'You have logged out');
    return res.redirect('/');
}