const User = require('../Models/UserModel');

// Get specific blood group
exports.specificBloodHolder = async (req, res) => {
    const blood_group = req.body.blood_group;
    let { page, sort } = req.query;

    if (!page) page = 1;
    const skip = (page - 1) * 5

    const user = await User.find({ blood_group: blood_group }).sort({ [sort]: -1 }).skip(skip).limit(5);
    if (user.length == 0) {
        return res.status(400).json({
            success: false,
            messsage: "No blood donor is available with this blood group!!!"
        })
    }


    res.status(200).json({
        success: true,
        Page: page,
        User: user
    })

}