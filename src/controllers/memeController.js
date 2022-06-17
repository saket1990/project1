let axios = require("axios")



let memeCreate= async function(req,res){

    try {
       
                
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=112126428&text0=Functionup Assignments&text1=Me ready for evening walk&username=functionupradon&password=Function@123`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.memeCreate = memeCreate
