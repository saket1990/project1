const authorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken");


const createAuthor= async function(req, res) {
   let data= req.body;
   let savedData= await authorModel.create(data)
   res.send({status: true, msg: savedData})
    }

    const loginUser = async function (req, res) {
        try {
            let userName = req.body.email
            let password = req.body.password
            let user = await authorModel.findOne({ email: userName, password: password })
            if (!user)
                return res.status(404).send({status: false,msg: "username or the password is not correct"})
            let token = jwt.sign({ userId: user._id.toString(),
                batch: "thorium",
                organisation: "FUnctionUp",},"functionup-thorium")   
            res.status(200).send({ status: true, data: token, authorId: user._id  })   
        } catch (err) {
            res.status(500).send({ msg: "Error", error: err.message })
        }
    }
module.exports.loginUser= loginUser
module.exports.createAuthor= createAuthor

