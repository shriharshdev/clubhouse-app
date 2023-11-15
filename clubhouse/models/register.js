const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RegisterSchema = new Schema({
    username:{type:String, required:true, minLength:3, maxLength:20},
    password:{type:String, required:true, minLength:5, maxLength:20}
})

module.exports = mongoose.model("Register",RegisterSchema)