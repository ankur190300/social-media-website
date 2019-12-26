const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    service:"gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: '********@gmail.com', // generated ethereal user
        pass: '********' // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
});

let renderTemplate = (data, relativePath) => {
    let mailHTML;

    ejs.renderFile (

        path.join(__dirname, '../views/mailers', relativePath),
        data,

        function (err, template) {

                if (err) {
                    console.log("there was an error in creating a mail ready file", err);
                    return;
                }
                mailHTML = template;
                
        }

        



    )
    return mailHTML;

        


}

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate

}