// Create a new router
const express = require("express");
const router = express.Router();
const app = express();

// Define our data
var shopData = {
    shopName: "Nommy's Bobar",
    productCategories: ["Boba", "Sadwich", "Soft Drinks", "Hot Drinks"],
    shopLocations: [
        {
            manager: "Noor Nayem",
            address: "123 Boba Street, London, UK",
        },
        {
            manager: "Mango Man",
            address: "911 Mango Road, London, UK",
        },
        {
            manager: "Lychee Woman",
            address: "001 Lychee Road, London, UK",
        },
    ],
};

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

router.get("/search_result", function (req, res) {
    res.render("search_result.ejs", {
        ...shopData, // Pass shopData for the header
        searchText: req.query.search_text,
        category: req.query.category,
    });
});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
    res.render("registered.ejs", {
        ...shopData, // Pass shopData for the header
        firstName: req.body.first,
        lastName: req.body.last,
        emailAddress: req.body.email,
    });
});

// Export the router object so index.js can access it
module.exports = router;
