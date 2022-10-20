const Post = require('../Models/PostModel');

// Get post news feed
exports.postNewsFeed = async (req, res) => {
    const postData = await Post.find();

    if (postData.length == 0) {
        return res.status(400).json({
            success: false,
            message: "No post is available!!!"
        })
    }

    res.status(200).json({
        success: true,
        postData: postData,
    })

}