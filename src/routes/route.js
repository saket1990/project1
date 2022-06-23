const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const BlogsController= require("../controllers/BlogsController");
const updateController= require("../controllers/updateController");
const deleteController= require("../controllers/deleteController");
const Middleware = require("../middlewares/auth");


router.post("/authors", AuthorController.createAuthor)
router.post("/blogs/:userId", BlogsController.createBlog)
router.get("/getblogs",BlogsController.findBlogs)
router.get("/filterblogs",BlogsController.filterBlogs)
router.put("/updateblogs/:blogid",updateController.updateBlogs)
router.delete("/delblogs/:blogid",deleteController.deleteBlog)
router.delete("/delblogbyparam",deleteController.deleteBlogsByparams )


router.post("/loginUser",AuthorController.loginUser)
router.put("/updateblogs/:blogid",Middleware.authenticate,Middleware.authorise,updateController.updateBlogs)
router.delete("/delblogs/:blogid",Middleware.authenticate,Middleware.authorise,deleteController.deleteBlog)
router.delete("/delblogbyparam",Middleware.authenticate,Middleware.authorise,deleteController.deleteBlogsByparams)


module.exports = router;