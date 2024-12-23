const express = require("express");
const {db} = require("./config/database");
const path = require("path");

const port = 8083;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/assets')));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routers'));

app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("server started on :- \n http://localhost:" + port);

    }
});