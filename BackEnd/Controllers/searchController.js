const User = require('../Models/UserModel');

// Get specific blood group
exports.specificBloodHolder = async (req, res) => {
    const blood_group = req.body.blood_group;

    const user = await User.find({ blood_group: blood_group });
    if (user.length == 0) {
        return res.status(400).json({
            success: false,
            messsage: "No blood donor is available with this blood group!!!"
        })
    }


    res.status(200).json({
        success: true,
        User: user
    })

}