const User = require('../Models/UserModel');
const sendToken = require('../Utils/JwtToken')

// User registration
exports.createAccount = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(404).json({
                successL: false,
                message: "User already registired with this account"
            })
        }
        user = await User.create({
            name: name,
            email: email,
            password: password,
            avater: {
                public_id: 'www.myPicture.com',
                url: 'www.myUrl.com'
            }
        })

        sendToken(user, 200, res);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


// User login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            success: true,
            message: "Please provide email or password!!"
        })
    }

    const user = await User.findOne({ email });
    if (!user) {
        res.status(400).json({
            success: false,
            message: "User is not found with this email"
        })
    }

    const isPaswordMatched = user.comparePassword(password);

    if (!isPaswordMatched) {
        res.status(400).json({
            success: false,
            message: "Password is incorrect!!"
        })
    }

    sendToken(user, 200, res);
}

// User logout
exports.userLogout = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
        res.status(400).json({
            success: false,
            message: "User is not found with this email !!"
        })
    }

    res.status(200).cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "Log out successful !!"
    })

}