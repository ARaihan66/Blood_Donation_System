const { findById, findByIdAndUpdate } = require('../Models/UserModel');
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

    try {
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
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// User logout
exports.userLogout = async (req, res) => {

    try {
        let user = await User.findById(req.user.id)

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
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}


// User profile details
exports.userProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            User: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// User profile update
exports.updateProfile = async (req, res, next) => {
    const { id, name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({
                success: false,
                message: "User is not found with this email !!"
            })
        }

        user = await findByIdAndUpdate(id, {
            $set: {
                name: name,
                email: email,
                password: password
            }
        }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            message: 'Profile is successfully updated!!',
            updatedUser: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// Update password
exports.updatePassword = async (req, res, next) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    try {
        const user = await User.findById(req.user);

        if (!user) {
            res.status(400).json({
                success: false,
                message: "User is not found !!"
            })
        }

        const isPasswordMatched = user.comparePassword(oldPassword);

        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: "Password is not matched!!"
            })
        }

        if (newPassword !== confirmPassword) {
            return res.status(401).json({
                success: false,
                message: "New password is not match with confirm password"
            })
        }

        user.password = newPassword;
        await user.save();
        sendToken(user, 200, res);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// Get all user ------ Admin
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            Users: users
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// Get single user detail ----- Admin
exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            res.status(401).json({
                success: false,
                message: "User is not found !!"
            })
        }

        res.status(200).json({
            success: true,
            User: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


