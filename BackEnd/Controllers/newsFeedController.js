const Post = require('../Models/PostModel');
const Comment = require('../Models/CommentModel');


exports.getNewsFeed = async (req, res) => {
    const postData = await Post.find();
    const commentData = await Comment.find();

    res.status(200).json({
        success: true,
        postData: postData,
        commentData: commentData
    })
}