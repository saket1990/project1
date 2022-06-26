const jwt = require('jsonwebtoken')

const authToken = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        if (!token) token = req.headers['X-Api-Key']
        if (!token) {
            return res.status(400).send({ status: false, msg: "token must be present in the request header" })
        }
        let decodedToken = jwt.verify(token, "functionup-radon")
        if (!decodedToken) {
            return res.status(400).send({ status: false, msg: "token is invalid" });
        }
        //authorization
        let userToBeModified = req.params.authorId
        let userLoggedIn = decodedToken.authorId
        if (userToBeModified != userLoggedIn) {
            return res.status(400).send({ status: false, msg: "not authorized" })
        }
        next();
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.authToken = authToken