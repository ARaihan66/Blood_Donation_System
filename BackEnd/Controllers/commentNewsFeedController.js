const Comment = require('../Models/CommentModel');

// Get comment news feed
exports.commentNewsFeed = async (req, res) => {
    const commentData = await Comment.find();

    if (commentData.length == 0) {
        return res.status(400).json({
            success: false,
            message: "No comment is available!!!"
        })
    }

    res.status(200).json({
        success: true,
        commentData: commentData
    })

}