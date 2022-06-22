const authorModel = require("../models/authorModel");


const createAuthor= async function(req, res) {
try{    
   let data= req.body;
   let savedData= await authorModel.create(data)
   res.status(200).send({status: true, data: savedData})
    }
catch(err){
        res.status(404).send({ msg: "Error", error: err.message })
    }
}
module.exports.createAuthor= createAuthor

