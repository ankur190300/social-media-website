const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");

// includeing the layout variable for the backend layouts 
//always remember to include it before using the router
app.use(expressLayouts);
//use express router


//adding the static files to the project
app.use(express.static("./assets"));


//reading the post request from the form 
app.use(express.urlencoded());

//using the cookieparse as a middleware
app.use(cookieParser());


// extract css and javascript files from the base files to the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);



app.use('/', require('./routes'));


//setting up the view engine

app.set('view engine', 'ejs');
app.set('views', './views');




app.listen(port, function (err) {

    if (err) {
        console.log(`unable to connect to the server due to error ${err}`);
        return;

    }
    else
        console.log(" express server is up and running on port", port);
});