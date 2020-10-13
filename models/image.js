const mongoose = require('mongoose');
const { extname } = require('path');
const path = require('path');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    title: { type: String },
    descrtption: { type: String },
    filename: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now }
})

ImageSchema.virtual('uniqueId').get(function() {
    return this.filename.replace(path.extname(this.filename), '');
})

module.exports = mongoose.model('Image', ImageSchema);