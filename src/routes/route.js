const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const BlogsController= require("../controllers/BlogsController");
const updateController= require("../controllers/updateController");
const deleteController= require("../controllers/deleteController");
const Middleware = require("../middlewares/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/authors", AuthorController.createAuthor)
router.post("/blogs/:userId",Middleware.authenticate,Middleware.authorise, BlogsController.createBlog)
router.get("/getblogs",BlogsController.findBlogs)
router.get("/filterblogs",BlogsController.filterBlogs)
router.put("/updateblogs/:blogid",Middleware.authenticate,Middleware.authorise,updateController.updateBlogs)
router.delete("/delblogs/:blogid",deleteController.deleteBlog)
router.delete("/delblogbyparam",deleteController.deleteBlogsByparams )
router.post("/loginUser",AuthorController.loginUser)


module.exports = router;