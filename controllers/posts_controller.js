const Post = require('../models/posts');
//const passport = require('')
const Comment = require('../models/comment');

module.exports.create =  async function (req, res) {

    try {
         let Post= await Post.create({

            content: req.body.content,
            user: req.user._id
         })

        req.flash('success', "Post published!")

        if (req.xhr) {

            return res.status(200).json({
                data: {
                    post: Post,
                }, 
                message:'post created'
            })
        }
        
        return res.redirect('back');
        

    } catch(err){
        req.flash('error',err)
        return res.redirect('back');
    }
};

module.exports.delete = async function (req, res) {
    
    try {
        let post =await Post.findById(req.params.id);


        //id instead of _id because id returns string
        if (post.user == req.user.id) {
            post.remove();
            req.flash('success', 'The post and the associated comments deleted');
            await Comment.deleteMany({ post: req.params.id })
        }
        else {
            req.flash('error', 'You are unauthorized to delete this post')
        }

        res.redirect('back');



    }
    catch(err){
        req.flash('error', err);
        return res.redirect('back')

    }


}