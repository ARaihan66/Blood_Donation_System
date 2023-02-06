const User = require('../Models/UserModel');
const Otp = require('../Models/OtpModel');
const sendToken = require('../Utils/JwtToken.js');
const sendMail = require('../Utils/sendMail.js');
const sendOtp = require('../Utils/sendMail.js');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');


// User registration otp send
exports.createOtp = async (req, res, next) => {

    const { email } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).send("User was already registired with this email")
    }

    const OTP = `${Math.floor(1000 + Math.random() * 9000)}`

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "OTP code from Blood Donor application", // Subject line
        text: OTP
    }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            console.log("Mail has seccessfully sent", data.response)
        }
    })

    const otpEmail = await Otp.findOne({ email: email });

    if (!otpEmail) {
        await Otp.create({
            email: email,
            otp: OTP
        })

    }

    else {
        await Otp.updateOne({ email: email }, {
            $set: {
                otp: OTP
            }
        }, { new: true })
    }

    res.status(200).json({
        success: true,
        OTP: OTP
    })

    //res.status(200).cookie('token', Shakil, { domain: 'localhost' });

}


//User registration using otp
exports.createAccount = async (req, res) => {
    const { otp,
        user_name,
        age,
        number,
        password,
        city,
        blood_group,
        requirements } = req.body;

    const otpUser = await Otp.findOne({ otp: otp });


    if (otp === otpUser.otp) {
        const user = await User.create({

            otp: otp,
            email: otpUser.email,
            user_name: user_name,
            age: age,
            number: number,
            password: password,
            city: city,
            blood_group: blood_group,
            requirements: requirements,

            avater: {
                public_id: 'www.myPicture.com',
                url: 'www.myUrl.com'
            }
        })

        return res.status(200).json({
            seccess: true,
            message: "Registration Successful!!!"
        })
    }
    else {
        return res.status(400).json({
            seccess: false,
            message: "OTP not match!!!"
        })
    }

}


// User login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({
            success: true,
            message: "Please provide email or password!!"
        })
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User is not found with this email"
        })
    }

    const isPaswordMatched = user.comparePassword(password);

    //const isPaswordMatched = await bcrypt.compare(password, user.password).then(res => {
    //    console.log(res) // return true

    if (!isPaswordMatched) {
        return res.status(400).json({
            success: false,
            message: "Password is incorrect!!"
        })
    }

    const token = await user.getJwtToken();

    //sendToken(user, 201, res);

    //res.status(200).json({
    //    success: true,
    //    User: user,
    //    Token: token
    //})

    res.status(200).cookie('token', "shakil", {
        expires: new Date(Date.now() + 24 * 7 * 30 * 356 * 12 * 1),
        httpOnly: true
    }).json({
        success: true,
        User: user,
        Token: token
    })

}

// User logout
exports.userLogout = async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Successfully logout !!"
    })
}


// User profile details
exports.userProfile = async (req, res) => {

    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        User: user
    })

}

// User profile update
exports.updateProfile = async (req, res, next) => {

    let user = await User.findById(req.user.id);

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User is not found with this email !!"
        })
    }

    if (user.email === req.body.email) {
        return res.status(400).json({
            success: false,
            message: "User is already registered with this email !!"
        })
    }

    const updatedData = {
        name: req.body.name,
        email: req.body.email
    }

    user = await User.findByIdAndUpdate(req.user.id, updatedData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    await user.save();

    res.status(200).json({
        message: 'Profile is successfully updated!!',
        updatedUser: user
    })

}

// Update password
exports.updatePassword = async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User is not found !!"
        })
    }

    const isPasswordMatched = user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return res.status(401).json({
            success: false,
            message: "Password is not matched!!"
        })
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return res.status(401).json({
            success: false,
            message: "New password is not match with confirm password"
        })
    }

    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);

}


// Forget password sending OTP
exports.forgetPassword = async (req, res) => {
    const { email } = req.body;
    let userData = await User.findOne({ email });
    if (!userData) {
        return res.status(400).json({
            success: false,
            message: "User is not found with this email !!"
        })
    }

    const OTP = `${Math.floor(1000 + Math.random() * 9000)}`

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "OTP code from Blood Cell application", // Subject line
        text: OTP
    }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            console.log("Mail has seccessfully sent", data.response)
        }
    })

    const otpEmail = await Otp.findOne({ email: email });

    if (!otpEmail) {
        await Otp.create({
            email: email,
            otp: OTP
        })

    }

    else {
        await Otp.updateOne({ email: email }, {
            $set: {
                otp: OTP
            }
        }, { new: true })
    }


    //res.redirect('http://localhost:5000/api/user/create/account');

    res.status(200).json({
        success: true,
        OTP: OTP
    })

}



// Reset password using OTP
exports.resetPassword = async (req, res) => {
    const { otp, password, confirmPassword } = req.body;

    const otpUser = await Otp.findOne({ otp: otp });

    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Password don't match!!!"
        })
    }

    const salt = await bcrypt.genSalt(10);
    //const hashPassword = await bcrypt.hash(password, 10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (otp === otpUser.otp) {
        user = await User.updateOne({ email: otpUser.email }, {
            $set: {
                password: hashPassword,
            }
        }, { new: true })

        res.status(200).json({
            success: true,
            message: `Password: ${hashPassword}`
        })
    }
    else {
        return res.status(400).json({
            seccess: false,
            message: "OTP not match!!!"
        })
    }
}

// Get all user ------ Admin
exports.getAllUser = async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        Users: users
    })
}


// Get single user detail ----- Admin
exports.getSingleUser = async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "User is not found !!"
        })
    }

    res.status(200).json({
        success: true,
        User: user
    })

}

// Donation Date
exports.donationDate = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.user._id, { $set: { donationTime: new Date() } }, { new: true });

    res.status(200).json({
        success: true,
        user: user
    })
}




