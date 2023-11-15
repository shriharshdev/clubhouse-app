const express = require('express')
const router = express.Router()

const register_controller = require('../controller/registerController')
const post_controller = require('../controller/postController')
const forum_controller = require('../controller/forumsController')

router.get("/register",register_controller.register_user_get)
router.post("/register",register_controller.register_user_post)

router.get("/posts",post_controller.post_list)
router.get("/create/post",post_controller.create_post_get)
router.post("/create/post",post_controller.create_post_post)

router.get("/fourms",forum_controller.forums_list)
router.get("/create/forum",forum_controller.forum_create_get)
router.post("/create/forum",forum_controller.forum_create_post)

module.exports = router