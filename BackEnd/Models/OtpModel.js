const { Schema, model } = require('mongoose');

const otpSchema = Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Email is not valid"],
        unique: true
    },
    otp: {
        type: String,
        type: true
    }
})

const Opt = model("Opt", otpSchema);
module.exports = Opt;