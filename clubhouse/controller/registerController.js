const asyncHandler = require('express-async-handler')
const Register = require('../models/register')


exports.register_user_get = asyncHandler(async(req,res,next)=>{
    res.render("register.ejs")
})
exports.register_user_post = asyncHandler(async(req,res,next)=>{
    try{
        const register = new Register({
            username:req.body.username,
            password:req.body.password
        })
        const result = await register.save()
        res.redirect("/")
    } catch(err){
        return next(err)
    }
})