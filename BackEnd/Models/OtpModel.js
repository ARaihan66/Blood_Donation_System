const { Schema, model } = require('mongoose');
const validator = require('validator');

const otpSchema = Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Email is not valid"],
        unique: true
    },
    otp: {
        type: Number,

    }
})

const OtpModel = model("Opt", otpSchema);
module.exports = OtpModel;