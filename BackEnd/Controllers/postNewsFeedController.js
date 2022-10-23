const Post = require('../Models/PostModel');

// Get post news feed
exports.postNewsFeed = async (req, res) => {
    const { page, sort } = req.query;

    if (!page) page = 1;

    const skip = (page - 1) * 5

    const postData = await Post.find().sort({ [sort]: -1 }).skip(skip).limit(5);

    if (postData.length == 0) {
        return res.status(400).json({
            success: false,
            message: "No post is available!!!"
        })
    }

    res.status(200).json({
        success: true,
        page: page,
        postData: postData,
    })

}