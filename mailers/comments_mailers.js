const nodeMailer = require('../config/nodemailer')

exports.newcomment = (comment) => {

    

    let htmlString = nodeMailer.renderTemplate({ comment: comment }, '/comments/new_comment.ejs' );
    nodeMailer.transporter.sendMail({
        from: 'ankur190300@gmail.com', // sender address
        to: comment.user.email,
        subject: "New comment published!", // Subject line
        //text: "Your comment has been published !", // plain text body
        html: htmlString// html body
    }, (err, info) => {
            if (err) {
                console.log("There was an error in sending the email", err);
                return;
            }
            console.log("Message Sent", info);
            return;
    }

    );

}