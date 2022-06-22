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
        res.status(201).send({ status: true, msg: createdBlog });
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        });
    }
};
module.exports.createBlog= createBlog