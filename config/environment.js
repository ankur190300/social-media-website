const development = {
    name: 'development', 
    asset_path: '/assets', 
    session_cookie_secret: 'ihavetobefaster',
    db: 'media_website',
    smtp: {
        host: "smtp.gmail.email",
        service: "gmail",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '********@gmail.com', // generated ethereal user
            pass: '********' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    },
    jwt_secret: 'Iamimproving',
    user_mail: '*************',


}

const production = {
    name: 'production', 
    asset_path: process.env.CODIAL_ASSET_PATH,
    session_cookie_secret: process.env.CODIAL_SESSION_COOKIE_KEY,
    db: process.env.CODIAL_DATABASE,
    smtp: {
        host: "smtp.gmail.email",
        service: "gmail",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.CODIAL_GMAIL_USERNAME, // generated ethereal user
            pass: process.env.CODIAL_GMAIL_PASSWORD,// generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    },
    jwt_secret: process.env.CODIAL_JWT_SECRET,
    user_mail: process.env.CODIAL_GMAIL_USERNAME,

}
//console.log((eval(process.env.CODIAL_ENVIRONMENT) == undefined) ? development : eval(process.env.CODIAL_ENVIRONMENT)

module.exports = eval(process.env.CODIAL_ENVIRONMENT) == undefined ?development:eval(process.env.CODIAL_ENVIRONMENT);
