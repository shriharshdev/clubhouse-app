
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:{type:String, required:true, minLength:1, maxLength:20},
    post:{type:String, required:true, minLength:5, maxLength:200},
    forum:[{type:Schema.Types.ObjectId,ref:"fourms"}],
})

module.exports = mongoose.model("Post", PostSchema)