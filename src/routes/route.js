const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const BlogsController= require("../controllers/BlogsController");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/authors", AuthorController.createAuthor)
router.post("/blogs",BlogsController.createBlog)

module.exports = router;