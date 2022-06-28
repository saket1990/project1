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
router.get("/blogs", Middleware.authToken, BlogController.blogs)

//update blog
router.put("/blogs/:blogId", Middleware.authToken, BlogController.updateblogs)

//delete blog
router.delete("/blogs/:blogId", Middleware.authToken, BlogController.deleteblogs)
router.delete("/blogs?queryParams", Middleware.authToken, BlogController.deleteBlogsByQuery)

module.exports = router;