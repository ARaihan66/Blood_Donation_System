const { findById, findByIdAndUpdate, updateOne } = require('../Models/UserModel');
const User = require('../Models/UserModel');
const sendToken = require('../Utils/JwtToken.js');
const sendMail = require('../Utils/sendMail.js');
const randomstring = require('randomstring');
const e = require('express');

// User registration
exports.createAccount = async (req, res) => {

    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(404).send("User already registired with this email")
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

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User is not found with this email"
        })
    }

    const isPaswordMatched = await user.comparePassword(password);

    if (!isPaswordMatched) {
        return res.status(400).json({
            success: false,
            message: "Password is incorrect!!"
        })
    }

    sendToken(user, 201, res);

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

// Forget password
exports.forgetPassword = async (req, res) => {
    const { email } = req.body;
    let userData = await User.findOne({ email });
    if (!userData) {
        return res.status(400).json({
            success: false,
            message: "User is not found with this email !!"
        })
    }

    const tempToken = randomstring.generate();

    const user = await User.updateOne({ email }, { $set: { token: tempToken } });
    //console.log(user);
    sendMail(userData.name, userData.email, tempToken);

    res.status(400).json({
        success: true,
        message: "Please check your mail and reset password !!"
    })

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
        res.status(401).json({
            success: false,
            message: "User is not found !!"
        })
    }

    res.status(200).json({
        success: true,
        User: user
    })

}


