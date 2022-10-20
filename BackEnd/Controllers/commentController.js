const User = require('../Models/UserModel');
const Comment = require('../Models/CommentModel');


// Create comment
exports.createComment = async (req, res) => {
    const commentData = req.body.commentData;
    const user = await User.findById(req.user.id);

    const userComment = await Comment.create({
        commentData: commentData,

        commentedUser: {
            userId: user._id,
            name: user.name
        }
    })

    res.status(200).json({
        seccess: true,
        message: "Post has created successfully",
        post: userComment
    });
}

// Update Comment
exports.updateComment = async (req, res) => {
    const { commentData, id } = req.body;
    const user = await User.findById(req.user.id);

    const comment = await Comment.findById(id);

    if (!comment) {
        return res.status(400).json({
            success: false,
            message: "You don't create post"
        })
    }

    const updateComment = await Comment.findByIdAndUpdate(id, {
        $set: {
            commentData: commentData,
        }
    }, { new: true })

    res.status(200).json({
        seccess: true,
        message: "Post has updated successfully",
        post: updateComment
    });
}

// Delete comment
exports.deleteComment = async (req, res) => {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        message: "Post has deleted successfully"
    })
}