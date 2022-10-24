const Comment = require('../Models/CommentModel');

// Get comment news feed
exports.commentNewsFeed = async (req, res) => {
    const { page, sort } = req.query;

    if (!page) page = 1;

    const skip = (page - 1) * 5

    const commentData = await Comment.find().sort({ [sort]: -1 }).skip(skip).limit(5);

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