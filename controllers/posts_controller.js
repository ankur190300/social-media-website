const Post = require('../models/posts');

module.exports.create = function (req, res) {
    Post.create({

        content: req.body.content,
        user: req.user._id
    }, function (err, post) {
        if (err) {
            console.log('there was an error in uploading the post');
            return;
            }
           // console.log("the post that has been uploaded is this", post, "with user ",req.user._id);
            
            return res.redirect('back');
    });
};