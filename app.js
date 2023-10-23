const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())


app.set("view engine", "ejs")


app.get("/", (req, res) => {

    res.render('index.ejs', {
        title: "ejs is is an awesome template engine"
    });

});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})