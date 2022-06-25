const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const BlogController= require("../controllers/BlogsController");
const Middleware = require("../middlewares/auth");

//Author
router.post("/authors", AuthorController.createAuthor)
router.post("/login", AuthorController.loginAuthor)

//Blog 
router.post("/blogs", Middleware.authToken, BlogController.createBlog)
router.get("/getblogs", Middleware.authToken, BlogController.blogs)

//update blog
router.put("/updateblogs/:blogId", Middleware.authToken, BlogController.updateblogs)

//delete blog
router.delete("/deleteblog/:blogId", Middleware.authToken, BlogController.deleteblogs)
router.delete("/deletequery", Middleware.authToken, BlogController.deleteQuery)

module.exports = router;