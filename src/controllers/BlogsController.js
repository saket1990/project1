const authorModel = require("../models/authorModel")
const blogModel = require("../models/blogModel");


const createBlog = async function (req, res) {
    try {
        let data = req.body;
        if (data.authorId == undefined) return res.status(400).send({ status: false, msg: 'enter author id' })
        let check = await authorModel.findById(data.authorId);
        if (!check)
            return res.status(400).send({ status: false, msg: 'enter valid author id' });
        const createdBlog = await blogModel.create(data);
        if (!createdBlog)
            return res.status(400).send({ status: false, msg: 'data required' });
        res.status(201).send({ status: true, data: createdBlog });
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        });
    }
}

const getBlogs=async function(req, res){
    try{
        let allBlogs=await blogModel.find({$and:[{isDeleted:false},{isPublished:true}]})
        if(allBlogs==false){return res.status(404).send({status:true,msg:"no such blog present"})}
        res.status(200).send({status:true,msg:"Blog found", data:allBlogs})    
        }
    catch(err){
        res.status(500).send({status:true,msg:err.message })
    }
}


const filterBlogs = async function (req, res) {
    try {
        const auth = req.query.authorId
        const cat = req.query.category
        const tag = req.query.tags
        const subcat = req.query.subcategory
        const gotBlogs = await blogModel.find({ $or: [{ authorId: auth }, { category: cat }, { tags: tag }, { subcategory: subcat }] });
        if (gotBlogs == false) return res.status(404).send({ status: false, msg: "no such blogs are present" })
        res.status(201).send({ status: true, msg: "Found Blogs okey", data: gotBlogs })
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        })
    }

}

module.exports.createBlog= createBlog
module.exports.getBlogs= getBlogs
module.exports.filterBlogs= filterBlogs
