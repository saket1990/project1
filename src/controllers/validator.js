// var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)

if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(req.data.email)){
    res.send({status:false, msg:"enter valid emailid"})
}

const a={}
const {authorid}=req.query.authorid

if(authorid){
    a.authorid=authorid
}

Object.keys(length==0)