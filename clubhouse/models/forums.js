const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ForumsSchema = new Schema({
    title:{type:String, required:true, minLength:1, maxLength:10},
    description:{type:String, required:true, minLength:5, maxLength:200},
})

ForumsSchema.virtual("url").get(function (){
    return `/clubhouse/forum/${this._id}`
})

module.exports = mongoose.model("Forum", ForumsSchema)