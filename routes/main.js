// Create a new router
const express = require("express");
const router = express.Router();
const app = express();

// Define our data
var shopData = { shopName: "Nommy's Bobar", productCategories: ["Boba", "Shoaib", "Soft Drinks", "Hot Drinks"] };

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
    res.render("about.ejs");
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
