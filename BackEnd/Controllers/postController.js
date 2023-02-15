const Post = require('../Models/PostModel.js');
const User = require('../Models/UserModel.js');

// Create post
exports.createPost = async (req, res) => {
    const { location, hospitalName, amountOfBlood, phoneNumber, whatsappNumber, requiredBloodGroup, patientDisease, date } = req.body;

    //const data = req.body.data;

    const user = await User.findById(req.user._id);

    console.log("user", user);

    if (user) {
        const userPost = await Post.create({
            location: location,
            hospitalName: hospitalName,
            amountOfBlood: amountOfBlood,
            phoneNumber: phoneNumber,
            whatsappNumber: whatsappNumber,
            requiredBloodGroup: requiredBloodGroup,
            patientDisease: patientDisease,
            date: date,
            postedUser: {
                userId: user._id,
                name: user.user_name
            }
        })
        res.status(200).json({
            seccess: true,
            message: "Post has created successfully",
            post: userPost
            //data: data,
        });
    } else {
        res.status(400).json({
            seccess: false,
            message: "Please Login first",
        });
    }
}

// Update post
exports.updatePost = async (req, res) => {
    const { location, hospitalName, amountOfBlood, phoneNumber, requiredBloodGroup, patientDisease, postId } = req.body;
    const user = await User.findById(req.user.id);

    const post = await Post.findById(postId);

    if (!post) {
        return res.status(400).json({
            success: false,
            message: "You don't create post"
        })
    }

    const updatePost = await Post.findByIdAndUpdate(postId, {
        $set: {
            location: location,
            hospitalName: hospitalName,
            amountOfBlood: amountOfBlood,
            phoneNumber: phoneNumber,
            requiredBloodGroup: requiredBloodGroup,
            patientDisease: patientDisease,
            postedUser: {
                userId: user._id,
                name: user.name
            }
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