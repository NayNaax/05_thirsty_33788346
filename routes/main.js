// Create a new router
const express = require("express");
const router = express.Router();
const app = express();

// Define our data
var shopData = { shopName: "Nommy's Bobar", productCategories: ["Boba", "Sadwich", "Soft Drinks", "Hot Drinks"] };

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

// Export the router object so index.js can access it
module.exports = router;

//handles
app.get("/", function (req, res) {
    res.render("index.ejs", shopData);
});

router.get("/search_result", function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
    res.send(
        " Hello " +
            req.body.first +
            " " +
            req.body.last +
            " you are now registered! We will send an email to you at" +
            req.body.email
    );
});
