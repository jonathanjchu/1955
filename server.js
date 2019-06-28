const express = require("express"),
    mongoose = require("mongoose"),
    bp = require("body-parser"),
    DB_NAME = "1955",
    cors = require("cors"),
    app = express(),
    port = 8000;

app.use(express.static(__dirname + "/static"));
app.use(cors())
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./server/utils/mongoose')(DB_NAME)
require('./server/utils/routes')(app)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});