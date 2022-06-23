const jwt = require('jsonwebtoken')

const authenticate = function(req, res, next) {
try{  
    let token = req.headers["x-api-key"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    next()
    }
    catch(err) {res.status().send({status:false, msg:err.message})}
}

const authorise = function(req, res, next) {
try{ 
    let token = req.headers['x-api-key']
    if(!token) token= req.headers['X-Api-Key'];
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-radon')
    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next()
}
catch(err){res.status().send({status:false,msg:err.message})}
}

module.exports.authenticate= authenticate
module.exports.authorise= authorise