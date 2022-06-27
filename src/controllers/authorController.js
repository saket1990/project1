const AuthorModel = require("../models/authorModel")
const jwt = require("jsonwebtoken")


const createAuthor = async function (req, res) {
    try {
        let { title, fname, lname, email, password } = req.body
        if (!title) { return res.status(400).send({ status: false, message: "author title is required" }) }
        if (title !== "Mr") {
            if (title !== "Mrs") {
                if (title !== "Miss") {
                    return res.status(400).send({ status: false, message: "Should be Mr , Mrs , Miss" })
                }
            }
        }
        if (!fname) {
            return res.status(400).send({ status: false, message: "author first name is required" })
        }
        if (!/^[a-zA-Z]+$/.test(fname)) {
            res.status(400).send({ status: false, message: "First name should be a Character" })
        }
        if (!lname) {
            return res.status(400).send({ status: false, message: "author last name is required" })
        }
        if (!/^[a-zA-Z]+$/.test(lname)) {
            res.status(400).send({ status: false, message: "Last name should be a Character" })
        }
        if (!email) {
            return res.status(400).send({ status: false, message: "author email is required" })
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            res.status(400).send({ status: false, message: "Valid emailId is required" })
        }
        if (!password) {
            return res.status(400).send({ status: false, message: "author password is required" })
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            res.status(400).send({ status: false, message: "password should contain atleastone number or one alphabet and should be 8 character long" })
        }
        let authorCreated = await AuthorModel.create(req.body)
        res.status(201).send({ status: true, date: authorCreated, msg: "created" })
    }
    catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

const loginAuthor = async function (req, res) {
    try {
        let authorName = req.body.email;
        let password = req.body.password;
        if (!authorName) {
            return res.status(400).send({ status: false, msg: "email is required" })
        }
        if (!password) {
            return res.status(400).send({ status: false, msg: "password is required" })
        }

        let author = await AuthorModel.findOne({ emailId: authorName, password: password });
        if (!author)
            return res.status(400).send({
                status: false,
                msg: "Invalid Email or Password",
            });

        let token = jwt.sign(
            {
                authorId: author._id.toString(),
                batch: "radon",
                organisation: "FunctionUp",
            },
            "functionup-radon"   //secret code
        );
        res.setHeader("x-api-key", token);
        return res.status(200).send({ status: true, msg: "author logged in successfully", token: token });
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports.createAuthor = createAuthor
module.exports.loginAuthor = loginAuthor
