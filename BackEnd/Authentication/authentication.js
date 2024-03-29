const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');

exports.authenticatedUser = async (req, res, next) => {

    //const { token } = req.cookies;
    //if (!token) {
    //    return res.status(403).json({
    //        success: false,
    //        message: "Please login first !!"
    //    })
    //}

    //const varification = jwt.verify(token, process.env.JWT_SECRET_KEY)


    //req.user = await User.findById(varification.id);
    //next();

    try {
        const token = req.params.token;
        //var decoded = jwt_decode(token);
        console.log(token);
        const varification = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = await User.findById(varification.id);
        console.log(req.user);
        next();

    } catch (err) {
        return res.status(403).json({
            success: false,
            message: "Please login first !!"
        })

    }
}




// Admin role
exports.authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(400).json({
                message: "User unable to access the resources!!!",
            })
        }
        next();
    }
}