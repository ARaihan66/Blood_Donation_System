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

    res.send(userPost);
}