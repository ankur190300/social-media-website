const express = require("express");
const app = express();
const port = 8000;
app.listen(port, function (err) {

    if (err) {
        console.log(`unable to connect to the server due to error ${err}`);
        return;

    }
    else
        console.log(" express server is up and running on port", port);
});