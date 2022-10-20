const Post = require('../Models/PostModel.js');
const User = require('../Models/UserModel.js');

// Create post
exports.createPost = async (req, res) => {
    const postData = req.body.postData;
    const user = await User.findById(req.user.id);

    const userPost = await Post.create({
        postData: postData,

        postedUser: {
            userId: user._id,
            name: user.name
        }
    })

    res.status(200).json({
        seccess: true,
        message: "Post has created successfully",
        post: userPost
    });
}

// Update post
exports.updatePost = async (req, res) => {
    const { postData, id } = req.body;
    const user = await User.findById(req.user.id);

    const post = await Post.findById(id);

    if (!post) {
        return res.status(400).json({
            success: false,
            message: "You don't create post"
        })
    }

    const updatePost = await Post.findByIdAndUpdate(id, {
        $set: {
            postData: postData,
        }
    }, { new: true })

    res.status(200).json({
        seccess: true,
        message: "Post has updated successfully",
        post: updatePost
    });
}

// Delete post
exports.deletePost = async (req, res) => {
    const deletePost = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        message: "Post has deleted successfully"
    })
}