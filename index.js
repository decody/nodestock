const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 5000;

// set handlebars middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const otherStuff = "hello there, this is other stuff";

// set handlebars routes
app.get("/", (req, res) => {
    res.render("home", {
        stuff: otherStuff
    });
});

// set static folder (http://localhost:5000/)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));