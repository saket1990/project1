const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: { type: ObjectId, ref: 'Author', required: true },
    tags: { type: [String] },
    category: { type: String, required: true },
    subcategory: { type: [String] },
    isPublished: { type: Boolean, default: true },
    publishedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null }
}, { timestamps: true });

module.exports = new mongoose.model('blogs', blogSchema)