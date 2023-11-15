const asyncHandler = require('express-async-handler')

exports.post_list = asyncHandler(async(req,res,next)=>{
    res.send("POSTS LIST")
})
exports.create_post_get = asyncHandler(async(req,res,next)=>{
    res.send("Create post... GET")
})
exports.create_post_post = asyncHandler(async(req,res,next)=>{
    res.send("Create post...POST")
})