const Post = require('../Models/PostModel');
const Comment = require('../Models/CommentModel');


exports.getNewsFeed = async (req, res) => {
    const postData = await Post.find();
    const commentData = await Comment.find();

    if (!commentData) {
        res.status(400).json({
            success: false,
            message: "No post is available!!!"
        })
    }

    res.status(200).json({
        success: true,
        postData: postData,
        commentData: commentData
    })
}