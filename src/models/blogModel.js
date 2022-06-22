const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title: {required: true,type: String},
    body: {type: String,required: true},
    authorId: {type: ObjectId,ref: 'Author',required: true},
    tags: {type: [String]},
    category: {type: String,required:true},
    subcategory: {type:[String]},
    isPublished: {type: Boolean,default: false},
    publishedAt: {type:String,default:""},
    isDeleted: {type: Boolean,default: false},
    deletedAt: {type:String,default:""}
   
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema)