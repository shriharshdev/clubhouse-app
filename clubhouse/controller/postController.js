const asyncHandler = require('express-async-handler')
const Post = require('../models/posts')
const Forum = require('../models/forums')

exports.post_list = asyncHandler(async(req,res,next)=>{
    try{
        const posts = await Post.find().exec()
        res.render("post_list.ejs",{
            posts:posts,
        })
    } catch(err){
        return next(err)
    }
})
exports.post_detail = asyncHandler(async(req,res,next)=>{
    try{
        const post = await Post.findById(req.params.id).exec()
        res.render("post_detail.ejs",{
            post:post
        })
    } catch(err){
        return next(err)
    }
})
exports.create_post_get = asyncHandler(async(req,res,next)=>{
    try{
        const forums = await Forum.find().exec()
        res.render("post_create.ejs",{
            forums:forums
        })
    } catch (err) {
        return next(err)
    }
})
exports.create_post_post = asyncHandler(async(req,res,next)=>{
    try{
        const post = new Post({
            title:req.body.title,
            post:req.body.post,
            forum: Array.isArray(req.body.forum) ? req.body.forum : [req.body.forum]
        })
        console.log(post)
        const result = await post.save()
        res.redirect("/clubhouse/posts")
    } catch(err){
        return next(err)
    }
})