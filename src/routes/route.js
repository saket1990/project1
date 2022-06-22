const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const BlogsController= require("../controllers/BlogsController");
const deleteBlog=require("../controllers/deleteController")
const deleteBlogsByparams=require("../controllers/deleteController")
const UpdateBlogs=require("../controllers/updateController")


router.post("/authors", AuthorController.createAuthor)
router.post("/blogs",BlogsController.createBlog)
router.get("/blogs", BlogsController.getBlogs)
router.get("/filterBlogs", BlogsController.filterBlogs)
router.put("/blogs/:blogId", UpdateBlogs.UpdateBlogs)
router.delete("/blogs/:blogId", deleteBlog.deleteBlog)
router.delete("/blogs?queryParams", deleteBlogsByparams.deleteBlogsByparams)

module.exports = router;