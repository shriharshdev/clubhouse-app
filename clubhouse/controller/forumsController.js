const asyncHandler = require('express-async-handler')
const Forum = require('../models/forums')
const Post = require('../models/posts')

exports.forums_list = asyncHandler(async(req,res,next)=>{
    try{
        const forums = await Forum.find().exec()
        res.render("forum_list",{
            forums:forums
        })
    }catch(err){
        return next(err)
    }
})

exports.forum_posts = asyncHandler(async(req,res,next)=>{
    try{
        const forum = await Forum.findById(req.params.id).exec()
        if(!forum){
            return res.status(404).send('Forum not found');
        }
        const forumPosts = await Post.find({forum:forum}).exec()
        res.render("forum_posts.ejs",{
            forum:forum,
            posts:forumPosts
        })
    }catch(err){
        return next(err)
    }
})

exports.forum_create_get = asyncHandler(async(req,res,next)=>{
    res.render("forum_create.ejs")
})
exports.forum_create_post = asyncHandler(async(req,res,next)=>{
    try{
        const forum = new Forum({
            title:req.body.title,
            description:req.body.description
        })
        const result = await forum.save()
        res.redirect("/clubhouse/forums")
    } catch(err){
        return next(err)
    }
})