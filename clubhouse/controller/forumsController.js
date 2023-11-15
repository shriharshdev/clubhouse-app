const asyncHandler = require('express-async-handler')

exports.forums_list = asyncHandler(async(req,res,next)=>{
    res.send("FORUMS LIST")
})

exports.forum_create_get = asyncHandler(async(req,res,next)=>{
    res.send("Create forum... GET")
})
exports.forum_create_post = asyncHandler(async(req,res,next)=>{
    res.send("Create forum... POST")
})