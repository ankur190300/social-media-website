const Post = require('../models/posts');



module.exports.home = function (req, res) {
   // console.log(req.cookies);
    // res.cookie('user_id', 25);

    //returning all the posts to print on the home page
    /*
    Post.find({}, function (err, post) {

        if (err) {
            console.log('not able to show posts from the postsdb');

        }
        else {
            return res.render('home', { title: 'home', posts:post });
        }
    })*/


    //populating the post
    Post.find({}).populate('user').exec(function (err, post) {

        if (err) {
            console.log('not able to show posts from the postsdb');
            return;

        }
        else {
            return res.render('home', { title: 'home', posts: post });
        }
    });
   
};