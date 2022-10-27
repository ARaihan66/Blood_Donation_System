const { Schema, model } = require('mongoose');
const validator = require('validator');

const otpSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Email is not valid"],
        unique: true
    },
    otp: {
        type: Number
    },
    expiredAt: {
        type: Date,
        expires: 300
    }

}, { timestamps: true })

const OtpModel = model("Opt", otpSchema);
module.exports = OtpModel;