const Comment = require('../models/comment');
const Post = require('../models/posts');
const comment_mailer = require('../mailers/comments_mailers');

module.exports.create = async function (req, res) {
    console.log("inside comments creating section");
    try {
        let post = await Post.findById(req.body.post,);

        if (post) {
            // console.log(req.body);

            let comm =await Comment.create({
                content: req.body.content,
                user: req.user._id,
                post: req.body.post
            });


            post.comments.push(comm);
            post.save();

            comm = await comm.populate('user', 'name email').execPopulate();
            comment_mailer.newcomment(comm);
            req.flash('success', 'Comment created successfully');

            return res.redirect('/');

            
        }


    } catch(err){

        req.flash('error', err);
        console.log(err);
        return res.redirect('back');
    }
    
}

module.exports.delete = async function (req, res) {

    try {
        let comment = await Comment.findById(req.params.id)

        if (comment.user = req.user.id) {

            let postid = comment.post;
            comment.remove();
            await Post.findByIdAndUpdate(postid, { $pull: { comments: req.params.id } });
            req.flash('success', 'Comment deleted!')
            res.redirect('back');
           
        }
        else {
            req.flash('error', 'You are not authorized to delete this comment');
            res.response('back');
        }



    } catch (err) {
        req.flash('error', err);
        return res.redirect('back');
    }
   


}